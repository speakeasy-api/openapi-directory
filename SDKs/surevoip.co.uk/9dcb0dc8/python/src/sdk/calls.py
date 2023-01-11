import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Calls:
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

    
    def get_calls(self, request: operations.GetCallsRequest) -> operations.GetCallsResponse:
        r"""Validate a phone number by calling it once
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/calls"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCallsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OneGetResponses200ContentApplication1jsonSchema])
                res.one_get_responses_200_content_application_1json_schema = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OneannouncementsPostResponses400ContentApplication1jsonSchema])
                res.oneannouncements_post_responses_400_content_application_1json_schema = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OneannouncementsPostResponses403ContentApplication1jsonSchema])
                res.oneannouncements_post_responses_403_content_application_1json_schema = out

        return res

    
    def post_calls(self, request: operations.PostCallsRequest) -> operations.PostCallsResponse:
        r"""Create phone calls with or without announcements and scheduled hangups
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/calls"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCallsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostCalls202ApplicationJSON])
                res.post_calls_202_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OneannouncementsPostResponses400ContentApplication1jsonSchema])
                res.oneannouncements_post_responses_400_content_application_1json_schema = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OneannouncementsPostResponses403ContentApplication1jsonSchema])
                res.oneannouncements_post_responses_403_content_application_1json_schema = out
        elif r.status_code == 500:
            pass

        return res

    