package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingUserRolesUpdateRequest {
    public DfareportingUserRolesUpdatePathParams pathParams;
    public DfareportingUserRolesUpdateRequest withPathParams(DfareportingUserRolesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingUserRolesUpdateQueryParams queryParams;
    public DfareportingUserRolesUpdateRequest withQueryParams(DfareportingUserRolesUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UserRole request;
    public DfareportingUserRolesUpdateRequest withRequest(openapisdk.models.shared.UserRole request) {
        this.request = request;
        return this;
    }
    public DfareportingUserRolesUpdateSecurity security;
    public DfareportingUserRolesUpdateRequest withSecurity(DfareportingUserRolesUpdateSecurity security) {
        this.security = security;
        return this;
    }
}