import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Tenancy:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def tenancy_choices_list(self) -> operations.TenancyChoicesListResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tenancy/_choices/"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TenancyChoicesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def tenancy_choices_read(self, request: operations.TenancyChoicesReadRequest) -> operations.TenancyChoicesReadResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tenancy/_choices/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TenancyChoicesReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def tenancy_tenant_groups_create(self, request: operations.TenancyTenantGroupsCreateRequest) -> operations.TenancyTenantGroupsCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tenancy/tenant-groups/"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TenancyTenantGroupsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TenantGroup])
                res.tenant_group = out

        return res

    
    def tenancy_tenant_groups_delete(self, request: operations.TenancyTenantGroupsDeleteRequest) -> operations.TenancyTenantGroupsDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tenancy/tenant-groups/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TenancyTenantGroupsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def tenancy_tenant_groups_list(self, request: operations.TenancyTenantGroupsListRequest) -> operations.TenancyTenantGroupsListResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tenancy/tenant-groups/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TenancyTenantGroupsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.TenancyTenantGroupsList200ApplicationJSON])
                res.tenancy_tenant_groups_list_200_application_json_object = out

        return res

    
    def tenancy_tenant_groups_partial_update(self, request: operations.TenancyTenantGroupsPartialUpdateRequest) -> operations.TenancyTenantGroupsPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tenancy/tenant-groups/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TenancyTenantGroupsPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TenantGroup])
                res.tenant_group = out

        return res

    
    def tenancy_tenant_groups_read(self, request: operations.TenancyTenantGroupsReadRequest) -> operations.TenancyTenantGroupsReadResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tenancy/tenant-groups/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TenancyTenantGroupsReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TenantGroup])
                res.tenant_group = out

        return res

    
    def tenancy_tenant_groups_update(self, request: operations.TenancyTenantGroupsUpdateRequest) -> operations.TenancyTenantGroupsUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tenancy/tenant-groups/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TenancyTenantGroupsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TenantGroup])
                res.tenant_group = out

        return res

    
    def tenancy_tenants_create(self, request: operations.TenancyTenantsCreateRequest) -> operations.TenancyTenantsCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tenancy/tenants/"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TenancyTenantsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Tenant])
                res.tenant = out

        return res

    
    def tenancy_tenants_delete(self, request: operations.TenancyTenantsDeleteRequest) -> operations.TenancyTenantsDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tenancy/tenants/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TenancyTenantsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def tenancy_tenants_list(self, request: operations.TenancyTenantsListRequest) -> operations.TenancyTenantsListResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tenancy/tenants/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TenancyTenantsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.TenancyTenantsList200ApplicationJSON])
                res.tenancy_tenants_list_200_application_json_object = out

        return res

    
    def tenancy_tenants_partial_update(self, request: operations.TenancyTenantsPartialUpdateRequest) -> operations.TenancyTenantsPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tenancy/tenants/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TenancyTenantsPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Tenant])
                res.tenant = out

        return res

    
    def tenancy_tenants_read(self, request: operations.TenancyTenantsReadRequest) -> operations.TenancyTenantsReadResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tenancy/tenants/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TenancyTenantsReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Tenant])
                res.tenant = out

        return res

    
    def tenancy_tenants_update(self, request: operations.TenancyTenantsUpdateRequest) -> operations.TenancyTenantsUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tenancy/tenants/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TenancyTenantsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Tenant])
                res.tenant = out

        return res

    