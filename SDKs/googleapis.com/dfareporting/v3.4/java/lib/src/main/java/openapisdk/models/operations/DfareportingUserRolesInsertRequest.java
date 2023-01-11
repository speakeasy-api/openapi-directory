package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingUserRolesInsertRequest {
    public DfareportingUserRolesInsertPathParams pathParams;
    public DfareportingUserRolesInsertRequest withPathParams(DfareportingUserRolesInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingUserRolesInsertQueryParams queryParams;
    public DfareportingUserRolesInsertRequest withQueryParams(DfareportingUserRolesInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UserRole request;
    public DfareportingUserRolesInsertRequest withRequest(openapisdk.models.shared.UserRole request) {
        this.request = request;
        return this;
    }
    public DfareportingUserRolesInsertSecurity security;
    public DfareportingUserRolesInsertRequest withSecurity(DfareportingUserRolesInsertSecurity security) {
        this.security = security;
        return this;
    }
}