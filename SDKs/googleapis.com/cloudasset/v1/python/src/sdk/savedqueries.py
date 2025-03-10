"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

import requests as requests_http
from . import utils
from sdk.models import operations, shared
from typing import Any, Optional

class SavedQueries:
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
        
    def cloudasset_saved_queries_create(self, request: operations.CloudassetSavedQueriesCreateRequest, security: operations.CloudassetSavedQueriesCreateSecurity) -> operations.CloudassetSavedQueriesCreateResponse:
        r"""Creates a saved query in a parent project/folder/organization."""
        base_url = self._server_url
        
        url = utils.generate_url(operations.CloudassetSavedQueriesCreateRequest, base_url, '/v1/{parent}/savedQueries', request)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request, "saved_query_input", 'json')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        query_params = utils.get_query_params(operations.CloudassetSavedQueriesCreateRequest, request)
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('POST', url, params=query_params, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.CloudassetSavedQueriesCreateResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.SavedQuery])
                res.saved_query = out

        return res

    def cloudasset_saved_queries_delete(self, request: operations.CloudassetSavedQueriesDeleteRequest, security: operations.CloudassetSavedQueriesDeleteSecurity) -> operations.CloudassetSavedQueriesDeleteResponse:
        r"""Deletes a saved query."""
        base_url = self._server_url
        
        url = utils.generate_url(operations.CloudassetSavedQueriesDeleteRequest, base_url, '/v1/{name}', request)
        
        query_params = utils.get_query_params(operations.CloudassetSavedQueriesDeleteRequest, request)
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('DELETE', url, params=query_params)
        content_type = http_res.headers.get('Content-Type')

        res = operations.CloudassetSavedQueriesDeleteResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    def cloudasset_saved_queries_get(self, request: operations.CloudassetSavedQueriesGetRequest, security: operations.CloudassetSavedQueriesGetSecurity) -> operations.CloudassetSavedQueriesGetResponse:
        r"""Gets details about a saved query."""
        base_url = self._server_url
        
        url = utils.generate_url(operations.CloudassetSavedQueriesGetRequest, base_url, '/v1/{name}', request)
        
        query_params = utils.get_query_params(operations.CloudassetSavedQueriesGetRequest, request)
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('GET', url, params=query_params)
        content_type = http_res.headers.get('Content-Type')

        res = operations.CloudassetSavedQueriesGetResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.SavedQuery])
                res.saved_query = out

        return res

    def cloudasset_saved_queries_list(self, request: operations.CloudassetSavedQueriesListRequest, security: operations.CloudassetSavedQueriesListSecurity) -> operations.CloudassetSavedQueriesListResponse:
        r"""Lists all saved queries in a parent project/folder/organization."""
        base_url = self._server_url
        
        url = utils.generate_url(operations.CloudassetSavedQueriesListRequest, base_url, '/v1/{parent}/savedQueries', request)
        
        query_params = utils.get_query_params(operations.CloudassetSavedQueriesListRequest, request)
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('GET', url, params=query_params)
        content_type = http_res.headers.get('Content-Type')

        res = operations.CloudassetSavedQueriesListResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.ListSavedQueriesResponse])
                res.list_saved_queries_response = out

        return res

    def cloudasset_saved_queries_patch(self, request: operations.CloudassetSavedQueriesPatchRequest, security: operations.CloudassetSavedQueriesPatchSecurity) -> operations.CloudassetSavedQueriesPatchResponse:
        r"""Updates a saved query."""
        base_url = self._server_url
        
        url = utils.generate_url(operations.CloudassetSavedQueriesPatchRequest, base_url, '/v1/{name}', request)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request, "saved_query_input", 'json')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        query_params = utils.get_query_params(operations.CloudassetSavedQueriesPatchRequest, request)
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('PATCH', url, params=query_params, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.CloudassetSavedQueriesPatchResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.SavedQuery])
                res.saved_query = out

        return res

    