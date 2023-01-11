package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IamRolesQueryGrantableRolesRequest {
    public IamRolesQueryGrantableRolesQueryParams queryParams;
    public IamRolesQueryGrantableRolesRequest withQueryParams(IamRolesQueryGrantableRolesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.QueryGrantableRolesRequest request;
    public IamRolesQueryGrantableRolesRequest withRequest(openapisdk.models.shared.QueryGrantableRolesRequest request) {
        this.request = request;
        return this;
    }
    public IamRolesQueryGrantableRolesSecurity security;
    public IamRolesQueryGrantableRolesRequest withSecurity(IamRolesQueryGrantableRolesSecurity security) {
        this.security = security;
        return this;
    }
}