package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SiteVerificationWebResourceUpdateRequest {
    public SiteVerificationWebResourceUpdatePathParams pathParams;
    public SiteVerificationWebResourceUpdateRequest withPathParams(SiteVerificationWebResourceUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SiteVerificationWebResourceUpdateQueryParams queryParams;
    public SiteVerificationWebResourceUpdateRequest withQueryParams(SiteVerificationWebResourceUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SiteVerificationWebResourceResource request;
    public SiteVerificationWebResourceUpdateRequest withRequest(openapisdk.models.shared.SiteVerificationWebResourceResource request) {
        this.request = request;
        return this;
    }
    public SiteVerificationWebResourceUpdateSecurity security;
    public SiteVerificationWebResourceUpdateRequest withSecurity(SiteVerificationWebResourceUpdateSecurity security) {
        this.security = security;
        return this;
    }
}