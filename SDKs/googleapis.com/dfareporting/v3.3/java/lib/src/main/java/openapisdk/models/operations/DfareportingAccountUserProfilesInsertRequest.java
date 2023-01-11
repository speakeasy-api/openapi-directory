package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingAccountUserProfilesInsertRequest {
    public DfareportingAccountUserProfilesInsertPathParams pathParams;
    public DfareportingAccountUserProfilesInsertRequest withPathParams(DfareportingAccountUserProfilesInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingAccountUserProfilesInsertQueryParams queryParams;
    public DfareportingAccountUserProfilesInsertRequest withQueryParams(DfareportingAccountUserProfilesInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AccountUserProfile request;
    public DfareportingAccountUserProfilesInsertRequest withRequest(openapisdk.models.shared.AccountUserProfile request) {
        this.request = request;
        return this;
    }
    public DfareportingAccountUserProfilesInsertSecurity security;
    public DfareportingAccountUserProfilesInsertRequest withSecurity(DfareportingAccountUserProfilesInsertSecurity security) {
        this.security = security;
        return this;
    }
}