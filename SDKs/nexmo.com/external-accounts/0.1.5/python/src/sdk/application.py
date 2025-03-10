"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

import requests as requests_http
from . import utils
from sdk.models import operations, shared
from typing import Optional

class Application:
    r"""Inbound messages to an external account which is linked to an application will be delivered to the application's inbound URL."""
    _client: requests_http.Session
    _security_client: requests_http.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests_http.Session, security_client: requests_http.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version
        
    def link_application(self, request: operations.LinkApplicationRequest, security: operations.LinkApplicationSecurity) -> operations.LinkApplicationResponse:
        r"""Link application to an account"""
        base_url = self._server_url
        
        url = utils.generate_url(operations.LinkApplicationRequest, base_url, '/{provider}/{external_id}/applications', request)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request, "request_body", 'json')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        if data is None and form is None:
            raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('POST', url, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.LinkApplicationResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.AccountResponse])
                res.account_response = out
        elif http_res.status_code == 401:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.FourHundredAndOneResponse])
                res.four_hundred_and_one_response = out
        elif http_res.status_code == 403:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[operations.LinkApplication403ApplicationJSON])
                res.link_application_403_application_json_object = out
        elif http_res.status_code == 409:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[operations.LinkApplication409ApplicationJSON])
                res.link_application_409_application_json_object = out

        return res

    def unli_without_applicationnk_application(self, request: operations.UnliWithoutApplicationnkApplicationRequest, security: operations.UnliWithoutApplicationnkApplicationSecurity) -> operations.UnliWithoutApplicationnkApplicationResponse:
        r"""Unlink application from an account"""
        base_url = self._server_url
        
        url = utils.generate_url(operations.UnliWithoutApplicationnkApplicationRequest, base_url, '/{provider}/{external_id}/applications/{application_id}', request)
        
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('DELETE', url)
        content_type = http_res.headers.get('Content-Type')

        res = operations.UnliWithoutApplicationnkApplicationResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 204:
            pass
        elif http_res.status_code == 401:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.FourHundredAndOneResponse])
                res.four_hundred_and_one_response = out
        elif http_res.status_code == 403:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[operations.UnliWithoutApplicationnkApplication403ApplicationJSON])
                res.unli_without_applicationnk_application_403_application_json_object = out
        elif http_res.status_code == 409:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[operations.UnliWithoutApplicationnkApplication409ApplicationJSON])
                res.unli_without_applicationnk_application_409_application_json_object = out

        return res

    