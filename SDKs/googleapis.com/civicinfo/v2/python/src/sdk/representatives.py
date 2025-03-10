"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

import requests as requests_http
from . import utils
from sdk.models import operations, shared
from typing import Optional

class Representatives:
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
        
    def civicinfo_representatives_representative_info_by_address(self, request: operations.CivicinfoRepresentativesRepresentativeInfoByAddressRequest) -> operations.CivicinfoRepresentativesRepresentativeInfoByAddressResponse:
        r"""Looks up political geography and representative information for a single address."""
        base_url = self._server_url
        
        url = base_url.removesuffix('/') + '/civicinfo/v2/representatives'
        
        query_params = utils.get_query_params(operations.CivicinfoRepresentativesRepresentativeInfoByAddressRequest, request)
        
        client = self._client
        
        http_res = client.request('GET', url, params=query_params)
        content_type = http_res.headers.get('Content-Type')

        res = operations.CivicinfoRepresentativesRepresentativeInfoByAddressResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.RepresentativeInfoResponse])
                res.representative_info_response = out

        return res

    def civicinfo_representatives_representative_info_by_division(self, request: operations.CivicinfoRepresentativesRepresentativeInfoByDivisionRequest) -> operations.CivicinfoRepresentativesRepresentativeInfoByDivisionResponse:
        r"""Looks up representative information for a single geographic division."""
        base_url = self._server_url
        
        url = utils.generate_url(operations.CivicinfoRepresentativesRepresentativeInfoByDivisionRequest, base_url, '/civicinfo/v2/representatives/{ocdId}', request)
        
        query_params = utils.get_query_params(operations.CivicinfoRepresentativesRepresentativeInfoByDivisionRequest, request)
        
        client = self._client
        
        http_res = client.request('GET', url, params=query_params)
        content_type = http_res.headers.get('Content-Type')

        res = operations.CivicinfoRepresentativesRepresentativeInfoByDivisionResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.RepresentativeInfoData])
                res.representative_info_data = out

        return res

    