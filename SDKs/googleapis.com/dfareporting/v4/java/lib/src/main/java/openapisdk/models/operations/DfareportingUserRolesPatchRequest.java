package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingUserRolesPatchRequest {
    public DfareportingUserRolesPatchPathParams pathParams;
    public DfareportingUserRolesPatchRequest withPathParams(DfareportingUserRolesPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingUserRolesPatchQueryParams queryParams;
    public DfareportingUserRolesPatchRequest withQueryParams(DfareportingUserRolesPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UserRole request;
    public DfareportingUserRolesPatchRequest withRequest(openapisdk.models.shared.UserRole request) {
        this.request = request;
        return this;
    }
    public DfareportingUserRolesPatchSecurity security;
    public DfareportingUserRolesPatchRequest withSecurity(DfareportingUserRolesPatchSecurity security) {
        this.security = security;
        return this;
    }
}