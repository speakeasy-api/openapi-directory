"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

import requests as requests_http
from . import utils
from sdk.models import operations
from typing import Any, Optional

class Atm:
    r"""Endpoint for getting ATM data"""
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
        
    def get_atms(self, request: operations.GetAtmsRequest) -> operations.GetAtmsResponse:
        r"""Gets a list of all `ATM` objects."""
        base_url = self._server_url
        
        url = base_url.removesuffix('/') + '/atms'
        
        headers = utils.get_headers(request)
        
        client = self._client
        
        http_res = client.request('GET', url, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.GetAtmsResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            res.headers = http_res.headers
            
            if utils.match_content_type(content_type, 'application/prs.openbanking.opendata.v1.3+json'):
                out = utils.unmarshal_json(http_res.text, Optional[operations.GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSON])
                res.get_atms_200_application_prs_openbanking_opendata_v1_3_plus_json_object = out
        elif http_res.status_code == 400:
            res.headers = http_res.headers
            
            if utils.match_content_type(content_type, 'application/prs.openbanking.opendata.v1.3+json'):
                out = utils.unmarshal_json(http_res.text, Optional[operations.GetAtms400ErrorObject])
                res.four_hundred_error_object = out
        elif http_res.status_code == 408:
            res.headers = http_res.headers
            
            if utils.match_content_type(content_type, 'application/prs.openbanking.opendata.v1.3+json'):
                out = utils.unmarshal_json(http_res.text, Optional[operations.GetAtms408ErrorObject])
                res.four_hundred_and_eight_error_object = out
        elif http_res.status_code == 429:
            res.headers = http_res.headers
            
            if utils.match_content_type(content_type, 'application/prs.openbanking.opendata.v1.3+json'):
                out = utils.unmarshal_json(http_res.text, Optional[operations.GetAtms429ErrorObject])
                res.four_hundred_and_twenty_nine_error_object = out
        elif http_res.status_code == 500:
            res.headers = http_res.headers
            
            if utils.match_content_type(content_type, 'application/prs.openbanking.opendata.v1.3+json'):
                out = utils.unmarshal_json(http_res.text, Optional[operations.GetAtms500ErrorObject])
                res.five_hundred_error_object = out
        elif http_res.status_code == 503:
            res.headers = http_res.headers
            
            if utils.match_content_type(content_type, 'application/prs.openbanking.opendata.v1.3+json'):
                out = utils.unmarshal_json(http_res.text, Optional[operations.GetAtms503ErrorObject])
                res.five_hundred_and_three_error_object = out
        else:
            res.headers = http_res.headers
            
            if utils.match_content_type(content_type, 'application/prs.openbanking.opendata.v1.3+json'):
                out = utils.unmarshal_json(http_res.text, Optional[operations.GetAtmsErrorObject])
                res.error_object = out

        return res

    def head_atms(self, request: operations.HeadAtmsRequest) -> operations.HeadAtmsResponse:
        r"""Gets header information on the current set of `ATM` data"""
        base_url = self._server_url
        
        url = base_url.removesuffix('/') + '/atms'
        
        headers = utils.get_headers(request)
        
        client = self._client
        
        http_res = client.request('HEAD', url, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.HeadAtmsResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if True:
            if utils.match_content_type(content_type, 'application/prs.openbanking.opendata.v1.3+json'):
                out = utils.unmarshal_json(http_res.text, Optional[dict[str, Any]])
                res.no_response = out

        return res

    