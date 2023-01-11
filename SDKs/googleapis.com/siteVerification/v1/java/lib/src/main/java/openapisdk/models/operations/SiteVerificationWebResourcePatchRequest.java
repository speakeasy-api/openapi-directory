package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SiteVerificationWebResourcePatchRequest {
    public SiteVerificationWebResourcePatchPathParams pathParams;
    public SiteVerificationWebResourcePatchRequest withPathParams(SiteVerificationWebResourcePatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SiteVerificationWebResourcePatchQueryParams queryParams;
    public SiteVerificationWebResourcePatchRequest withQueryParams(SiteVerificationWebResourcePatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SiteVerificationWebResourceResource request;
    public SiteVerificationWebResourcePatchRequest withRequest(openapisdk.models.shared.SiteVerificationWebResourceResource request) {
        this.request = request;
        return this;
    }
    public SiteVerificationWebResourcePatchSecurity security;
    public SiteVerificationWebResourcePatchRequest withSecurity(SiteVerificationWebResourcePatchSecurity security) {
        this.security = security;
        return this;
    }
}