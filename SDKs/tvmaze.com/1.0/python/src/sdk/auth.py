import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Auth:
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

    
    def get_auth_validate(self) -> operations.GetAuthValidateResponse:
        r"""Validate your authentication credentials
        If the credentials supplied as HTTP basic are valid, the user's level of premium - if any - is returned.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/auth/validate"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAuthValidateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAuthValidate200ApplicationJSON])
                res.get_auth_validate_200_application_json_object = out
        elif r.status_code == 401:
            pass

        return res

    
    def post_auth_poll(self, request: operations.PostAuthPollRequest) -> operations.PostAuthPollResponse:
        r"""Poll whether an authentication request was confirmed
        Using the token acquired in the `start` endpoint, you can start polling this endpoint once every 10 seconds.
        
        When the user has confirmed the authentication request on their end, this endpoint will return the user's API key that you can use in subsequent authenticated endpoints. Note that it'll do so only once, subsequent requests after the initial 200 response will return a 404.
        
        For as long as the user did not yet confirm their authentication request, this endpoint will return a 403.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/auth/poll"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAuthPollResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostAuthPoll200ApplicationJSON])
                res.post_auth_poll_200_application_json_object = out
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def post_auth_start(self, request: operations.PostAuthStartRequest) -> operations.PostAuthStartResponse:
        r"""Start an authentication request
        If you want to access the TVmaze API on behalf of a user without querying them for their password, use this endpoint.
        
        To get started, send a POST request containing the user's email address. The response will contain a `token`, which you can use as input to the `poll` endpoint. The user will receive an email prompting them to confirm the authentication request.
        
        Alternatively, if you expect the user to be logged in to TVmaze on the device they are currently interacting with, you can set `email_confirmation` to false and redirect them to the `confirm_url` URL. If they are logged in to TVmaze, they will be able to confirm the authentication request instantly.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/auth/start"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAuthStartResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostAuthStart200ApplicationJSON])
                res.post_auth_start_200_application_json_object = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    