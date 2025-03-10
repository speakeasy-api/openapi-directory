"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

import requests as requests_http
from . import utils
from sdk.models import operations, shared
from typing import Optional

class Placements:
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
        
    def dfareporting_placements_generatetags(self, request: operations.DfareportingPlacementsGeneratetagsRequest, security: operations.DfareportingPlacementsGeneratetagsSecurity) -> operations.DfareportingPlacementsGeneratetagsResponse:
        r"""Generates tags for a placement."""
        base_url = self._server_url
        
        url = utils.generate_url(operations.DfareportingPlacementsGeneratetagsRequest, base_url, '/userprofiles/{profileId}/placements/generatetags', request)
        
        query_params = utils.get_query_params(operations.DfareportingPlacementsGeneratetagsRequest, request)
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('POST', url, params=query_params)
        content_type = http_res.headers.get('Content-Type')

        res = operations.DfareportingPlacementsGeneratetagsResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.PlacementsGenerateTagsResponse])
                res.placements_generate_tags_response = out

        return res

    def dfareporting_placements_get(self, request: operations.DfareportingPlacementsGetRequest, security: operations.DfareportingPlacementsGetSecurity) -> operations.DfareportingPlacementsGetResponse:
        r"""Gets one placement by ID."""
        base_url = self._server_url
        
        url = utils.generate_url(operations.DfareportingPlacementsGetRequest, base_url, '/userprofiles/{profileId}/placements/{id}', request)
        
        query_params = utils.get_query_params(operations.DfareportingPlacementsGetRequest, request)
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('GET', url, params=query_params)
        content_type = http_res.headers.get('Content-Type')

        res = operations.DfareportingPlacementsGetResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.Placement])
                res.placement = out

        return res

    def dfareporting_placements_insert(self, request: operations.DfareportingPlacementsInsertRequest, security: operations.DfareportingPlacementsInsertSecurity) -> operations.DfareportingPlacementsInsertResponse:
        r"""Inserts a new placement."""
        base_url = self._server_url
        
        url = utils.generate_url(operations.DfareportingPlacementsInsertRequest, base_url, '/userprofiles/{profileId}/placements', request)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request, "placement", 'json')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        query_params = utils.get_query_params(operations.DfareportingPlacementsInsertRequest, request)
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('POST', url, params=query_params, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.DfareportingPlacementsInsertResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.Placement])
                res.placement = out

        return res

    def dfareporting_placements_list(self, request: operations.DfareportingPlacementsListRequest, security: operations.DfareportingPlacementsListSecurity) -> operations.DfareportingPlacementsListResponse:
        r"""Retrieves a list of placements, possibly filtered. This method supports paging."""
        base_url = self._server_url
        
        url = utils.generate_url(operations.DfareportingPlacementsListRequest, base_url, '/userprofiles/{profileId}/placements', request)
        
        query_params = utils.get_query_params(operations.DfareportingPlacementsListRequest, request)
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('GET', url, params=query_params)
        content_type = http_res.headers.get('Content-Type')

        res = operations.DfareportingPlacementsListResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.PlacementsListResponse])
                res.placements_list_response = out

        return res

    def dfareporting_placements_patch(self, request: operations.DfareportingPlacementsPatchRequest, security: operations.DfareportingPlacementsPatchSecurity) -> operations.DfareportingPlacementsPatchResponse:
        r"""Updates an existing placement. This method supports patch semantics."""
        base_url = self._server_url
        
        url = utils.generate_url(operations.DfareportingPlacementsPatchRequest, base_url, '/userprofiles/{profileId}/placements', request)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request, "placement", 'json')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        query_params = utils.get_query_params(operations.DfareportingPlacementsPatchRequest, request)
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('PATCH', url, params=query_params, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.DfareportingPlacementsPatchResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.Placement])
                res.placement = out

        return res

    def dfareporting_placements_update(self, request: operations.DfareportingPlacementsUpdateRequest, security: operations.DfareportingPlacementsUpdateSecurity) -> operations.DfareportingPlacementsUpdateResponse:
        r"""Updates an existing placement."""
        base_url = self._server_url
        
        url = utils.generate_url(operations.DfareportingPlacementsUpdateRequest, base_url, '/userprofiles/{profileId}/placements', request)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request, "placement", 'json')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        query_params = utils.get_query_params(operations.DfareportingPlacementsUpdateRequest, request)
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('PUT', url, params=query_params, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.DfareportingPlacementsUpdateResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.Placement])
                res.placement = out

        return res

    