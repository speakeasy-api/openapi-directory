"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

import requests as requests_http
from . import utils
from sdk.models import operations, shared
from typing import Optional

class Mobiledevices:
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
        
    def directory_mobiledevices_action(self, request: operations.DirectoryMobiledevicesActionRequest, security: operations.DirectoryMobiledevicesActionSecurity) -> operations.DirectoryMobiledevicesActionResponse:
        r"""Takes an action that affects a mobile device. For example, remotely wiping a device."""
        base_url = self._server_url
        
        url = utils.generate_url(operations.DirectoryMobiledevicesActionRequest, base_url, '/admin/directory/v1/customer/{customerId}/devices/mobile/{resourceId}/action', request)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request, "mobile_device_action", 'json')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        query_params = utils.get_query_params(operations.DirectoryMobiledevicesActionRequest, request)
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('POST', url, params=query_params, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.DirectoryMobiledevicesActionResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        

        return res

    def directory_mobiledevices_delete(self, request: operations.DirectoryMobiledevicesDeleteRequest, security: operations.DirectoryMobiledevicesDeleteSecurity) -> operations.DirectoryMobiledevicesDeleteResponse:
        r"""Removes a mobile device."""
        base_url = self._server_url
        
        url = utils.generate_url(operations.DirectoryMobiledevicesDeleteRequest, base_url, '/admin/directory/v1/customer/{customerId}/devices/mobile/{resourceId}', request)
        
        query_params = utils.get_query_params(operations.DirectoryMobiledevicesDeleteRequest, request)
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('DELETE', url, params=query_params)
        content_type = http_res.headers.get('Content-Type')

        res = operations.DirectoryMobiledevicesDeleteResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        

        return res

    def directory_mobiledevices_get(self, request: operations.DirectoryMobiledevicesGetRequest, security: operations.DirectoryMobiledevicesGetSecurity) -> operations.DirectoryMobiledevicesGetResponse:
        r"""Retrieves a mobile device's properties."""
        base_url = self._server_url
        
        url = utils.generate_url(operations.DirectoryMobiledevicesGetRequest, base_url, '/admin/directory/v1/customer/{customerId}/devices/mobile/{resourceId}', request)
        
        query_params = utils.get_query_params(operations.DirectoryMobiledevicesGetRequest, request)
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('GET', url, params=query_params)
        content_type = http_res.headers.get('Content-Type')

        res = operations.DirectoryMobiledevicesGetResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.MobileDevice])
                res.mobile_device = out

        return res

    def directory_mobiledevices_list(self, request: operations.DirectoryMobiledevicesListRequest, security: operations.DirectoryMobiledevicesListSecurity) -> operations.DirectoryMobiledevicesListResponse:
        r"""Retrieves a paginated list of all user-owned mobile devices for an account. To retrieve a list that includes company-owned devices, use the Cloud Identity [Devices API](https://cloud.google.com/identity/docs/concepts/overview-devices) instead. This method times out after 60 minutes. For more information, see [Troubleshoot error codes](https://developers.google.com/admin-sdk/directory/v1/guides/troubleshoot-error-codes)."""
        base_url = self._server_url
        
        url = utils.generate_url(operations.DirectoryMobiledevicesListRequest, base_url, '/admin/directory/v1/customer/{customerId}/devices/mobile', request)
        
        query_params = utils.get_query_params(operations.DirectoryMobiledevicesListRequest, request)
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('GET', url, params=query_params)
        content_type = http_res.headers.get('Content-Type')

        res = operations.DirectoryMobiledevicesListResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.MobileDevices])
                res.mobile_devices = out

        return res

    