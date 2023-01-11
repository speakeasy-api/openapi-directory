import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Oauth:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def authorize(self, request: operations.AuthorizeRequest) -> operations.AuthorizeResponse:
        r"""Authorize applications
        This endpoint returns a redirect URI (in the 'Location' header) that the customer uses to authorize your application and, together with POST /v2/oauth/access_token, generate an access token that represents that authorization.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/oauth/authorize"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthorizeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 302:
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def create_access_token(self, request: operations.CreateAccessTokenRequest) -> operations.CreateAccessTokenResponse:
        r"""Get access tokens
        This endpoint returns an access token for the specified user and with the specified scopes. The token does not expire until the user changes their password. The body parameters must be encoded as form data.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/oauth/access_token"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateAccessTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OauthAccessTokenResponse])
                res.oauth_access_token_response = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    