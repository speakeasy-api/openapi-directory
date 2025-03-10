"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

import requests as requests_http
from . import utils
from sdk.models import operations, shared
from typing import Optional

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
        
    def cloudidentity_groups_create(self, request: operations.CloudidentityGroupsCreateRequest, security: operations.CloudidentityGroupsCreateSecurity) -> operations.CloudidentityGroupsCreateResponse:
        r"""Creates a `Group`."""
        base_url = self._server_url
        
        url = base_url.removesuffix('/') + '/v1beta1/groups'
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request, "group_input", 'json')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        query_params = utils.get_query_params(operations.CloudidentityGroupsCreateRequest, request)
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('POST', url, params=query_params, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.CloudidentityGroupsCreateResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.Operation])
                res.operation = out

        return res

    def cloudidentity_groups_list(self, request: operations.CloudidentityGroupsListRequest, security: operations.CloudidentityGroupsListSecurity) -> operations.CloudidentityGroupsListResponse:
        r"""Lists the `Group` resources under a customer or namespace."""
        base_url = self._server_url
        
        url = base_url.removesuffix('/') + '/v1beta1/groups'
        
        query_params = utils.get_query_params(operations.CloudidentityGroupsListRequest, request)
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('GET', url, params=query_params)
        content_type = http_res.headers.get('Content-Type')

        res = operations.CloudidentityGroupsListResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.ListGroupsResponse])
                res.list_groups_response = out

        return res

    def cloudidentity_groups_lookup(self, request: operations.CloudidentityGroupsLookupRequest, security: operations.CloudidentityGroupsLookupSecurity) -> operations.CloudidentityGroupsLookupResponse:
        r"""Looks up the [resource name](https://cloud.google.com/apis/design/resource_names) of a `Group` by its `EntityKey`."""
        base_url = self._server_url
        
        url = base_url.removesuffix('/') + '/v1beta1/groups:lookup'
        
        query_params = utils.get_query_params(operations.CloudidentityGroupsLookupRequest, request)
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('GET', url, params=query_params)
        content_type = http_res.headers.get('Content-Type')

        res = operations.CloudidentityGroupsLookupResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.LookupGroupNameResponse])
                res.lookup_group_name_response = out

        return res

    def cloudidentity_groups_memberships_check_transitive_membership(self, request: operations.CloudidentityGroupsMembershipsCheckTransitiveMembershipRequest, security: operations.CloudidentityGroupsMembershipsCheckTransitiveMembershipSecurity) -> operations.CloudidentityGroupsMembershipsCheckTransitiveMembershipResponse:
        r"""Check a potential member for membership in a group. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. A member has membership to a group as long as there is a single viewable transitive membership between the group and the member. The actor must have view permissions to at least one transitive membership between the member and group."""
        base_url = self._server_url
        
        url = utils.generate_url(operations.CloudidentityGroupsMembershipsCheckTransitiveMembershipRequest, base_url, '/v1beta1/{parent}/memberships:checkTransitiveMembership', request)
        
        query_params = utils.get_query_params(operations.CloudidentityGroupsMembershipsCheckTransitiveMembershipRequest, request)
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('GET', url, params=query_params)
        content_type = http_res.headers.get('Content-Type')

        res = operations.CloudidentityGroupsMembershipsCheckTransitiveMembershipResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.CheckTransitiveMembershipResponse])
                res.check_transitive_membership_response = out

        return res

    def cloudidentity_groups_memberships_create(self, request: operations.CloudidentityGroupsMembershipsCreateRequest, security: operations.CloudidentityGroupsMembershipsCreateSecurity) -> operations.CloudidentityGroupsMembershipsCreateResponse:
        r"""Creates a `Membership`."""
        base_url = self._server_url
        
        url = utils.generate_url(operations.CloudidentityGroupsMembershipsCreateRequest, base_url, '/v1beta1/{parent}/memberships', request)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request, "membership_input", 'json')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        query_params = utils.get_query_params(operations.CloudidentityGroupsMembershipsCreateRequest, request)
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('POST', url, params=query_params, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.CloudidentityGroupsMembershipsCreateResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.Operation])
                res.operation = out

        return res

    def cloudidentity_groups_memberships_get_membership_graph(self, request: operations.CloudidentityGroupsMembershipsGetMembershipGraphRequest, security: operations.CloudidentityGroupsMembershipsGetMembershipGraphSecurity) -> operations.CloudidentityGroupsMembershipsGetMembershipGraphResponse:
        r"""Get a membership graph of just a member or both a member and a group. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. Given a member, the response will contain all membership paths from the member. Given both a group and a member, the response will contain all membership paths between the group and the member."""
        base_url = self._server_url
        
        url = utils.generate_url(operations.CloudidentityGroupsMembershipsGetMembershipGraphRequest, base_url, '/v1beta1/{parent}/memberships:getMembershipGraph', request)
        
        query_params = utils.get_query_params(operations.CloudidentityGroupsMembershipsGetMembershipGraphRequest, request)
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('GET', url, params=query_params)
        content_type = http_res.headers.get('Content-Type')

        res = operations.CloudidentityGroupsMembershipsGetMembershipGraphResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.Operation])
                res.operation = out

        return res

    def cloudidentity_groups_memberships_lookup(self, request: operations.CloudidentityGroupsMembershipsLookupRequest, security: operations.CloudidentityGroupsMembershipsLookupSecurity) -> operations.CloudidentityGroupsMembershipsLookupResponse:
        r"""Looks up the [resource name](https://cloud.google.com/apis/design/resource_names) of a `Membership` by its `EntityKey`."""
        base_url = self._server_url
        
        url = utils.generate_url(operations.CloudidentityGroupsMembershipsLookupRequest, base_url, '/v1beta1/{parent}/memberships:lookup', request)
        
        query_params = utils.get_query_params(operations.CloudidentityGroupsMembershipsLookupRequest, request)
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('GET', url, params=query_params)
        content_type = http_res.headers.get('Content-Type')

        res = operations.CloudidentityGroupsMembershipsLookupResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.LookupMembershipNameResponse])
                res.lookup_membership_name_response = out

        return res

    def cloudidentity_groups_memberships_modify_membership_roles(self, request: operations.CloudidentityGroupsMembershipsModifyMembershipRolesRequest, security: operations.CloudidentityGroupsMembershipsModifyMembershipRolesSecurity) -> operations.CloudidentityGroupsMembershipsModifyMembershipRolesResponse:
        r"""Modifies the `MembershipRole`s of a `Membership`."""
        base_url = self._server_url
        
        url = utils.generate_url(operations.CloudidentityGroupsMembershipsModifyMembershipRolesRequest, base_url, '/v1beta1/{name}:modifyMembershipRoles', request)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request, "modify_membership_roles_request_input", 'json')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        query_params = utils.get_query_params(operations.CloudidentityGroupsMembershipsModifyMembershipRolesRequest, request)
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('POST', url, params=query_params, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.CloudidentityGroupsMembershipsModifyMembershipRolesResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.ModifyMembershipRolesResponse])
                res.modify_membership_roles_response = out

        return res

    def cloudidentity_groups_memberships_search_direct_groups(self, request: operations.CloudidentityGroupsMembershipsSearchDirectGroupsRequest) -> operations.CloudidentityGroupsMembershipsSearchDirectGroupsResponse:
        r"""Searches direct groups of a member."""
        base_url = self._server_url
        
        url = utils.generate_url(operations.CloudidentityGroupsMembershipsSearchDirectGroupsRequest, base_url, '/v1beta1/{parent}/memberships:searchDirectGroups', request)
        
        query_params = utils.get_query_params(operations.CloudidentityGroupsMembershipsSearchDirectGroupsRequest, request)
        
        client = self._client
        
        http_res = client.request('GET', url, params=query_params)
        content_type = http_res.headers.get('Content-Type')

        res = operations.CloudidentityGroupsMembershipsSearchDirectGroupsResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.SearchDirectGroupsResponse])
                res.search_direct_groups_response = out

        return res

    def cloudidentity_groups_memberships_search_transitive_groups(self, request: operations.CloudidentityGroupsMembershipsSearchTransitiveGroupsRequest, security: operations.CloudidentityGroupsMembershipsSearchTransitiveGroupsSecurity) -> operations.CloudidentityGroupsMembershipsSearchTransitiveGroupsResponse:
        r"""Search transitive groups of a member. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. A transitive group is any group that has a direct or indirect membership to the member. Actor must have view permissions all transitive groups."""
        base_url = self._server_url
        
        url = utils.generate_url(operations.CloudidentityGroupsMembershipsSearchTransitiveGroupsRequest, base_url, '/v1beta1/{parent}/memberships:searchTransitiveGroups', request)
        
        query_params = utils.get_query_params(operations.CloudidentityGroupsMembershipsSearchTransitiveGroupsRequest, request)
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('GET', url, params=query_params)
        content_type = http_res.headers.get('Content-Type')

        res = operations.CloudidentityGroupsMembershipsSearchTransitiveGroupsResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.SearchTransitiveGroupsResponse])
                res.search_transitive_groups_response = out

        return res

    def cloudidentity_groups_memberships_search_transitive_memberships(self, request: operations.CloudidentityGroupsMembershipsSearchTransitiveMembershipsRequest, security: operations.CloudidentityGroupsMembershipsSearchTransitiveMembershipsSecurity) -> operations.CloudidentityGroupsMembershipsSearchTransitiveMembershipsResponse:
        r"""Search transitive memberships of a group. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. A transitive membership is any direct or indirect membership of a group. Actor must have view permissions to all transitive memberships."""
        base_url = self._server_url
        
        url = utils.generate_url(operations.CloudidentityGroupsMembershipsSearchTransitiveMembershipsRequest, base_url, '/v1beta1/{parent}/memberships:searchTransitiveMemberships', request)
        
        query_params = utils.get_query_params(operations.CloudidentityGroupsMembershipsSearchTransitiveMembershipsRequest, request)
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('GET', url, params=query_params)
        content_type = http_res.headers.get('Content-Type')

        res = operations.CloudidentityGroupsMembershipsSearchTransitiveMembershipsResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.SearchTransitiveMembershipsResponse])
                res.search_transitive_memberships_response = out

        return res

    def cloudidentity_groups_search(self, request: operations.CloudidentityGroupsSearchRequest, security: operations.CloudidentityGroupsSearchSecurity) -> operations.CloudidentityGroupsSearchResponse:
        r"""Searches for `Group` resources matching a specified query."""
        base_url = self._server_url
        
        url = base_url.removesuffix('/') + '/v1beta1/groups:search'
        
        query_params = utils.get_query_params(operations.CloudidentityGroupsSearchRequest, request)
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('GET', url, params=query_params)
        content_type = http_res.headers.get('Content-Type')

        res = operations.CloudidentityGroupsSearchResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.SearchGroupsResponse])
                res.search_groups_response = out

        return res

    