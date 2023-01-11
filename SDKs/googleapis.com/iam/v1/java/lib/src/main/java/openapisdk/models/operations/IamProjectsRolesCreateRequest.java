package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IamProjectsRolesCreateRequest {
    public IamProjectsRolesCreatePathParams pathParams;
    public IamProjectsRolesCreateRequest withPathParams(IamProjectsRolesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public IamProjectsRolesCreateQueryParams queryParams;
    public IamProjectsRolesCreateRequest withQueryParams(IamProjectsRolesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateRoleRequest request;
    public IamProjectsRolesCreateRequest withRequest(openapisdk.models.shared.CreateRoleRequest request) {
        this.request = request;
        return this;
    }
    public IamProjectsRolesCreateSecurity security;
    public IamProjectsRolesCreateRequest withSecurity(IamProjectsRolesCreateSecurity security) {
        this.security = security;
        return this;
    }
}