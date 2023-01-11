package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SiteVerificationWebResourceInsertRequest {
    public SiteVerificationWebResourceInsertQueryParams queryParams;
    public SiteVerificationWebResourceInsertRequest withQueryParams(SiteVerificationWebResourceInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SiteVerificationWebResourceResource request;
    public SiteVerificationWebResourceInsertRequest withRequest(openapisdk.models.shared.SiteVerificationWebResourceResource request) {
        this.request = request;
        return this;
    }
    public SiteVerificationWebResourceInsertSecurity security;
    public SiteVerificationWebResourceInsertRequest withSecurity(SiteVerificationWebResourceInsertSecurity security) {
        this.security = security;
        return this;
    }
}