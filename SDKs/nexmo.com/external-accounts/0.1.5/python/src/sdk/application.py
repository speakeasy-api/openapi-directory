import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Application:
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

    
    def link_application(self, request: operations.LinkApplicationRequest) -> operations.LinkApplicationResponse:
        r"""Link application to an account
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{provider}/{external_id}/applications", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.LinkApplicationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AccountResponse])
                res.account_response = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FourHundredAndOneResponse])
                res.four_hundred_and_one_response = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.LinkApplication403ApplicationJSON])
                res.link_application_403_application_json_object = out
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.LinkApplication409ApplicationJSON])
                res.link_application_409_application_json_object = out

        return res

    
    def unli_without_applicationnk_application(self, request: operations.UnliWithoutApplicationnkApplicationRequest) -> operations.UnliWithoutApplicationnkApplicationResponse:
        r"""Unlink application from an account
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{provider}/{external_id}/applications/{application_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UnliWithoutApplicationnkApplicationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FourHundredAndOneResponse])
                res.four_hundred_and_one_response = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UnliWithoutApplicationnkApplication403ApplicationJSON])
                res.unli_without_applicationnk_application_403_application_json_object = out
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UnliWithoutApplicationnkApplication409ApplicationJSON])
                res.unli_without_applicationnk_application_409_application_json_object = out

        return res

    