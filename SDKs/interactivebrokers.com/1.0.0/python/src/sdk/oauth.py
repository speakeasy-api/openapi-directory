import requests
from typing import Optional
from sdk.models import operations
from . import utils

class OAuth:
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

    
    def post_oauth_access_token(self, request: operations.PostOauthAccessTokenRequest) -> operations.PostOauthAccessTokenResponse:
        r"""Obtain a access token
        Obtain an access token using the request token and the verification code you received after the user provided authorization. See section 6.3 of the OAuth v1.0a specification for more details. 
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/oauth/access_token"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostOauthAccessTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostOauthAccessToken200ApplicationJSON])
                res.post_oauth_access_token_200_application_json_object = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 408:
            pass

        return res

    
    def post_oauth_live_session_token(self, request: operations.PostOauthLiveSessionTokenRequest) -> operations.PostOauthLiveSessionTokenResponse:
        r"""Obtain a live session token
        In order to access protected IB resources, a live session token is required. This endpoint allows consumers to obtain a live session token to access these resources using an OAuth access token and the Diffie-Hellman prime and generator supplied during the registration process.
        Note this is an additional IB-specific step, and not part of the OAuth v1.0a specification. Please refer to the \"OAuth at Interactive Brokers\" document for more details.  https://www.interactivebrokers.com/webtradingapi/oauth.pdf
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/oauth/live_session_token"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostOauthLiveSessionTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostOauthLiveSessionToken200ApplicationJSON])
                res.post_oauth_live_session_token_200_application_json_object = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 408:
            pass

        return res

    
    def post_oauth_request_token(self, request: operations.PostOauthRequestTokenRequest) -> operations.PostOauthRequestTokenResponse:
        r"""Obtain a request token
        Obtain a request token. See section 6.1 of the OAuth v1.0a specification for more information. http://oauth.net/core/1.0a/#auth_step1
        
        Note we do not return an oauth_token_secret in the response as we are using RSA signatures rather than PLAINTEXT authentication. 
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/oauth/request_token"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostOauthRequestTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostOauthRequestToken200ApplicationJSON])
                res.post_oauth_request_token_200_application_json_object = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 408:
            pass

        return res

    