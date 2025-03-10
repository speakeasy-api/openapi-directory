"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

import requests as requests_http
from . import utils
from sdk.models import operations, shared
from typing import Optional

class CreativeFieldValues:
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
        
    def dfareporting_creative_field_values_delete(self, request: operations.DfareportingCreativeFieldValuesDeleteRequest, security: operations.DfareportingCreativeFieldValuesDeleteSecurity) -> operations.DfareportingCreativeFieldValuesDeleteResponse:
        r"""Deletes an existing creative field value."""
        base_url = self._server_url
        
        url = utils.generate_url(operations.DfareportingCreativeFieldValuesDeleteRequest, base_url, '/userprofiles/{profileId}/creativeFields/{creativeFieldId}/creativeFieldValues/{id}', request)
        
        query_params = utils.get_query_params(operations.DfareportingCreativeFieldValuesDeleteRequest, request)
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('DELETE', url, params=query_params)
        content_type = http_res.headers.get('Content-Type')

        res = operations.DfareportingCreativeFieldValuesDeleteResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        

        return res

    def dfareporting_creative_field_values_get(self, request: operations.DfareportingCreativeFieldValuesGetRequest, security: operations.DfareportingCreativeFieldValuesGetSecurity) -> operations.DfareportingCreativeFieldValuesGetResponse:
        r"""Gets one creative field value by ID."""
        base_url = self._server_url
        
        url = utils.generate_url(operations.DfareportingCreativeFieldValuesGetRequest, base_url, '/userprofiles/{profileId}/creativeFields/{creativeFieldId}/creativeFieldValues/{id}', request)
        
        query_params = utils.get_query_params(operations.DfareportingCreativeFieldValuesGetRequest, request)
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('GET', url, params=query_params)
        content_type = http_res.headers.get('Content-Type')

        res = operations.DfareportingCreativeFieldValuesGetResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.CreativeFieldValue])
                res.creative_field_value = out

        return res

    def dfareporting_creative_field_values_insert(self, request: operations.DfareportingCreativeFieldValuesInsertRequest, security: operations.DfareportingCreativeFieldValuesInsertSecurity) -> operations.DfareportingCreativeFieldValuesInsertResponse:
        r"""Inserts a new creative field value."""
        base_url = self._server_url
        
        url = utils.generate_url(operations.DfareportingCreativeFieldValuesInsertRequest, base_url, '/userprofiles/{profileId}/creativeFields/{creativeFieldId}/creativeFieldValues', request)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request, "creative_field_value", 'json')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        query_params = utils.get_query_params(operations.DfareportingCreativeFieldValuesInsertRequest, request)
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('POST', url, params=query_params, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.DfareportingCreativeFieldValuesInsertResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.CreativeFieldValue])
                res.creative_field_value = out

        return res

    def dfareporting_creative_field_values_list(self, request: operations.DfareportingCreativeFieldValuesListRequest, security: operations.DfareportingCreativeFieldValuesListSecurity) -> operations.DfareportingCreativeFieldValuesListResponse:
        r"""Retrieves a list of creative field values, possibly filtered. This method supports paging."""
        base_url = self._server_url
        
        url = utils.generate_url(operations.DfareportingCreativeFieldValuesListRequest, base_url, '/userprofiles/{profileId}/creativeFields/{creativeFieldId}/creativeFieldValues', request)
        
        query_params = utils.get_query_params(operations.DfareportingCreativeFieldValuesListRequest, request)
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('GET', url, params=query_params)
        content_type = http_res.headers.get('Content-Type')

        res = operations.DfareportingCreativeFieldValuesListResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.CreativeFieldValuesListResponse])
                res.creative_field_values_list_response = out

        return res

    def dfareporting_creative_field_values_patch(self, request: operations.DfareportingCreativeFieldValuesPatchRequest, security: operations.DfareportingCreativeFieldValuesPatchSecurity) -> operations.DfareportingCreativeFieldValuesPatchResponse:
        r"""Updates an existing creative field value. This method supports patch semantics."""
        base_url = self._server_url
        
        url = utils.generate_url(operations.DfareportingCreativeFieldValuesPatchRequest, base_url, '/userprofiles/{profileId}/creativeFields/{creativeFieldId}/creativeFieldValues', request)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request, "creative_field_value", 'json')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        query_params = utils.get_query_params(operations.DfareportingCreativeFieldValuesPatchRequest, request)
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('PATCH', url, params=query_params, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.DfareportingCreativeFieldValuesPatchResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.CreativeFieldValue])
                res.creative_field_value = out

        return res

    def dfareporting_creative_field_values_update(self, request: operations.DfareportingCreativeFieldValuesUpdateRequest, security: operations.DfareportingCreativeFieldValuesUpdateSecurity) -> operations.DfareportingCreativeFieldValuesUpdateResponse:
        r"""Updates an existing creative field value."""
        base_url = self._server_url
        
        url = utils.generate_url(operations.DfareportingCreativeFieldValuesUpdateRequest, base_url, '/userprofiles/{profileId}/creativeFields/{creativeFieldId}/creativeFieldValues', request)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request, "creative_field_value", 'json')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        query_params = utils.get_query_params(operations.DfareportingCreativeFieldValuesUpdateRequest, request)
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('PUT', url, params=query_params, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.DfareportingCreativeFieldValuesUpdateResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.CreativeFieldValue])
                res.creative_field_value = out

        return res

    