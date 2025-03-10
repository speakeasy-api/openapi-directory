"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

import requests as requests_http
from . import utils
from sdk.models import operations, shared
from typing import Optional

class ManagedZoneOperations:
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
        
    def dns_managed_zone_operations_get(self, request: operations.DNSManagedZoneOperationsGetRequest, security: operations.DNSManagedZoneOperationsGetSecurity) -> operations.DNSManagedZoneOperationsGetResponse:
        r"""Fetches the representation of an existing Operation."""
        base_url = self._server_url
        
        url = utils.generate_url(operations.DNSManagedZoneOperationsGetRequest, base_url, '/dns/v1beta2/projects/{project}/managedZones/{managedZone}/operations/{operation}', request)
        
        query_params = utils.get_query_params(operations.DNSManagedZoneOperationsGetRequest, request)
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('GET', url, params=query_params)
        content_type = http_res.headers.get('Content-Type')

        res = operations.DNSManagedZoneOperationsGetResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.Operation])
                res.operation = out

        return res

    def dns_managed_zone_operations_list(self, request: operations.DNSManagedZoneOperationsListRequest, security: operations.DNSManagedZoneOperationsListSecurity) -> operations.DNSManagedZoneOperationsListResponse:
        r"""Enumerates Operations for the given ManagedZone."""
        base_url = self._server_url
        
        url = utils.generate_url(operations.DNSManagedZoneOperationsListRequest, base_url, '/dns/v1beta2/projects/{project}/managedZones/{managedZone}/operations', request)
        
        query_params = utils.get_query_params(operations.DNSManagedZoneOperationsListRequest, request)
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('GET', url, params=query_params)
        content_type = http_res.headers.get('Content-Type')

        res = operations.DNSManagedZoneOperationsListResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.ManagedZoneOperationsListResponse])
                res.managed_zone_operations_list_response = out

        return res

    