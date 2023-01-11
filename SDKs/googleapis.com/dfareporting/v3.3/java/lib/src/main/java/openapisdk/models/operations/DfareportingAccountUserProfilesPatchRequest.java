package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingAccountUserProfilesPatchRequest {
    public DfareportingAccountUserProfilesPatchPathParams pathParams;
    public DfareportingAccountUserProfilesPatchRequest withPathParams(DfareportingAccountUserProfilesPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingAccountUserProfilesPatchQueryParams queryParams;
    public DfareportingAccountUserProfilesPatchRequest withQueryParams(DfareportingAccountUserProfilesPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AccountUserProfile request;
    public DfareportingAccountUserProfilesPatchRequest withRequest(openapisdk.models.shared.AccountUserProfile request) {
        this.request = request;
        return this;
    }
    public DfareportingAccountUserProfilesPatchSecurity security;
    public DfareportingAccountUserProfilesPatchRequest withSecurity(DfareportingAccountUserProfilesPatchSecurity security) {
        this.security = security;
        return this;
    }
}