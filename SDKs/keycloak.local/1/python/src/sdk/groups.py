"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

import requests as requests_http
from . import utils
from sdk.models import operations, shared
from typing import Any, Optional

class Groups:
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
        
    def delete_realm_groups_id_(self, request: operations.DeleteRealmGroupsIDRequest) -> operations.DeleteRealmGroupsIDResponse:
        base_url = self._server_url
        
        url = utils.generate_url(operations.DeleteRealmGroupsIDRequest, base_url, '/{realm}/groups/{id}', request)
        
        
        client = self._security_client
        
        http_res = client.request('DELETE', url)
        content_type = http_res.headers.get('Content-Type')

        res = operations.DeleteRealmGroupsIDResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        

        return res

    def get_realm_groups(self, request: operations.GetRealmGroupsRequest) -> operations.GetRealmGroupsResponse:
        r"""Get group hierarchy."""
        base_url = self._server_url
        
        url = utils.generate_url(operations.GetRealmGroupsRequest, base_url, '/{realm}/groups', request)
        
        query_params = utils.get_query_params(operations.GetRealmGroupsRequest, request)
        
        client = self._security_client
        
        http_res = client.request('GET', url, params=query_params)
        content_type = http_res.headers.get('Content-Type')

        res = operations.GetRealmGroupsResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code >= 200 and http_res.status_code < 300:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[list[shared.GroupRepresentation]])
                res.group_representations = out

        return res

    def get_realm_groups_count(self, request: operations.GetRealmGroupsCountRequest) -> operations.GetRealmGroupsCountResponse:
        r"""Returns the groups counts."""
        base_url = self._server_url
        
        url = utils.generate_url(operations.GetRealmGroupsCountRequest, base_url, '/{realm}/groups/count', request)
        
        query_params = utils.get_query_params(operations.GetRealmGroupsCountRequest, request)
        
        client = self._security_client
        
        http_res = client.request('GET', url, params=query_params)
        content_type = http_res.headers.get('Content-Type')

        res = operations.GetRealmGroupsCountResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code >= 200 and http_res.status_code < 300:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[dict[str, Any]])
                res.get_realm_groups_count_2_xx_application_json_object = out

        return res

    def get_realm_groups_id_(self, request: operations.GetRealmGroupsIDRequest) -> operations.GetRealmGroupsIDResponse:
        base_url = self._server_url
        
        url = utils.generate_url(operations.GetRealmGroupsIDRequest, base_url, '/{realm}/groups/{id}', request)
        
        
        client = self._security_client
        
        http_res = client.request('GET', url)
        content_type = http_res.headers.get('Content-Type')

        res = operations.GetRealmGroupsIDResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code >= 200 and http_res.status_code < 300:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.GroupRepresentation])
                res.group_representation = out

        return res

    def get_realm_groups_id_management_permissions(self, request: operations.GetRealmGroupsIDManagementPermissionsRequest) -> operations.GetRealmGroupsIDManagementPermissionsResponse:
        r"""Return object stating whether client Authorization permissions have been initialized or not and a reference"""
        base_url = self._server_url
        
        url = utils.generate_url(operations.GetRealmGroupsIDManagementPermissionsRequest, base_url, '/{realm}/groups/{id}/management/permissions', request)
        
        
        client = self._security_client
        
        http_res = client.request('GET', url)
        content_type = http_res.headers.get('Content-Type')

        res = operations.GetRealmGroupsIDManagementPermissionsResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code >= 200 and http_res.status_code < 300:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.ManagementPermissionReference])
                res.management_permission_reference = out

        return res

    def get_realm_groups_id_members(self, request: operations.GetRealmGroupsIDMembersRequest) -> operations.GetRealmGroupsIDMembersResponse:
        r"""Get users   Returns a list of users, filtered according to query parameters"""
        base_url = self._server_url
        
        url = utils.generate_url(operations.GetRealmGroupsIDMembersRequest, base_url, '/{realm}/groups/{id}/members', request)
        
        query_params = utils.get_query_params(operations.GetRealmGroupsIDMembersRequest, request)
        
        client = self._security_client
        
        http_res = client.request('GET', url, params=query_params)
        content_type = http_res.headers.get('Content-Type')

        res = operations.GetRealmGroupsIDMembersResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code >= 200 and http_res.status_code < 300:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[list[shared.UserRepresentation]])
                res.user_representations = out

        return res

    def post_realm_groups(self, request: operations.PostRealmGroupsRequest) -> operations.PostRealmGroupsResponse:
        r"""create or add a top level realm groupSet or create child."""
        base_url = self._server_url
        
        url = utils.generate_url(operations.PostRealmGroupsRequest, base_url, '/{realm}/groups', request)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request, "group_representation", 'json')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        if data is None and form is None:
            raise Exception('request body is required')
        
        client = self._security_client
        
        http_res = client.request('POST', url, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.PostRealmGroupsResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        

        return res

    def post_realm_groups_id_children(self, request: operations.PostRealmGroupsIDChildrenRequest) -> operations.PostRealmGroupsIDChildrenResponse:
        r"""Set or create child."""
        base_url = self._server_url
        
        url = utils.generate_url(operations.PostRealmGroupsIDChildrenRequest, base_url, '/{realm}/groups/{id}/children', request)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request, "group_representation", 'json')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        if data is None and form is None:
            raise Exception('request body is required')
        
        client = self._security_client
        
        http_res = client.request('POST', url, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.PostRealmGroupsIDChildrenResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        

        return res

    def put_realm_groups_id_(self, request: operations.PutRealmGroupsIDRequest) -> operations.PutRealmGroupsIDResponse:
        r"""Update group, ignores subgroups."""
        base_url = self._server_url
        
        url = utils.generate_url(operations.PutRealmGroupsIDRequest, base_url, '/{realm}/groups/{id}', request)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request, "group_representation", 'json')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        if data is None and form is None:
            raise Exception('request body is required')
        
        client = self._security_client
        
        http_res = client.request('PUT', url, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.PutRealmGroupsIDResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        

        return res

    def put_realm_groups_id_management_permissions(self, request: operations.PutRealmGroupsIDManagementPermissionsRequest) -> operations.PutRealmGroupsIDManagementPermissionsResponse:
        r"""Return object stating whether client Authorization permissions have been initialized or not and a reference"""
        base_url = self._server_url
        
        url = utils.generate_url(operations.PutRealmGroupsIDManagementPermissionsRequest, base_url, '/{realm}/groups/{id}/management/permissions', request)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request, "management_permission_reference", 'json')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        if data is None and form is None:
            raise Exception('request body is required')
        
        client = self._security_client
        
        http_res = client.request('PUT', url, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.PutRealmGroupsIDManagementPermissionsResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code >= 200 and http_res.status_code < 300:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.ManagementPermissionReference])
                res.management_permission_reference = out

        return res

    