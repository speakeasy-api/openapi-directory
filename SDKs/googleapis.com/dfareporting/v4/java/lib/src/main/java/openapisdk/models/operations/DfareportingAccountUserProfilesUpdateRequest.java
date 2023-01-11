package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingAccountUserProfilesUpdateRequest {
    public DfareportingAccountUserProfilesUpdatePathParams pathParams;
    public DfareportingAccountUserProfilesUpdateRequest withPathParams(DfareportingAccountUserProfilesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingAccountUserProfilesUpdateQueryParams queryParams;
    public DfareportingAccountUserProfilesUpdateRequest withQueryParams(DfareportingAccountUserProfilesUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AccountUserProfile request;
    public DfareportingAccountUserProfilesUpdateRequest withRequest(openapisdk.models.shared.AccountUserProfile request) {
        this.request = request;
        return this;
    }
    public DfareportingAccountUserProfilesUpdateSecurity security;
    public DfareportingAccountUserProfilesUpdateRequest withSecurity(DfareportingAccountUserProfilesUpdateSecurity security) {
        this.security = security;
        return this;
    }
}