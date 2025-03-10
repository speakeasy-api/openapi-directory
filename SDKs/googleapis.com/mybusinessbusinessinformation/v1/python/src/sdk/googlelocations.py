"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

import requests as requests_http
from . import utils
from sdk.models import operations, shared
from typing import Optional

class GoogleLocations:
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
        
    def mybusinessbusinessinformation_google_locations_search(self, request: operations.MybusinessbusinessinformationGoogleLocationsSearchRequest) -> operations.MybusinessbusinessinformationGoogleLocationsSearchResponse:
        r"""Search all of the possible locations that are a match to the specified request."""
        base_url = self._server_url
        
        url = base_url.removesuffix('/') + '/v1/googleLocations:search'
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request, "search_google_locations_request_input", 'json')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        query_params = utils.get_query_params(operations.MybusinessbusinessinformationGoogleLocationsSearchRequest, request)
        
        client = self._client
        
        http_res = client.request('POST', url, params=query_params, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.MybusinessbusinessinformationGoogleLocationsSearchResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.SearchGoogleLocationsResponse])
                res.search_google_locations_response = out

        return res

    