package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FactchecktoolsPagesCreateRequest {
    public FactchecktoolsPagesCreateQueryParams queryParams;
    public FactchecktoolsPagesCreateRequest withQueryParams(FactchecktoolsPagesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage request;
    public FactchecktoolsPagesCreateRequest withRequest(openapisdk.models.shared.GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage request) {
        this.request = request;
        return this;
    }
    public FactchecktoolsPagesCreateSecurity security;
    public FactchecktoolsPagesCreateRequest withSecurity(FactchecktoolsPagesCreateSecurity security) {
        this.security = security;
        return this;
    }
}