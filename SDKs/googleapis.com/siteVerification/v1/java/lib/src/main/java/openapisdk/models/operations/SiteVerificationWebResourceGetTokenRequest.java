package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SiteVerificationWebResourceGetTokenRequest {
    public SiteVerificationWebResourceGetTokenQueryParams queryParams;
    public SiteVerificationWebResourceGetTokenRequest withQueryParams(SiteVerificationWebResourceGetTokenQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SiteVerificationWebResourceGettokenRequest request;
    public SiteVerificationWebResourceGetTokenRequest withRequest(openapisdk.models.shared.SiteVerificationWebResourceGettokenRequest request) {
        this.request = request;
        return this;
    }
    public SiteVerificationWebResourceGetTokenSecurity security;
    public SiteVerificationWebResourceGetTokenRequest withSecurity(SiteVerificationWebResourceGetTokenSecurity security) {
        this.security = security;
        return this;
    }
}