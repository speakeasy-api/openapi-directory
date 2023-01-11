package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FactchecktoolsPagesUpdateRequest {
    public FactchecktoolsPagesUpdatePathParams pathParams;
    public FactchecktoolsPagesUpdateRequest withPathParams(FactchecktoolsPagesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FactchecktoolsPagesUpdateQueryParams queryParams;
    public FactchecktoolsPagesUpdateRequest withQueryParams(FactchecktoolsPagesUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage request;
    public FactchecktoolsPagesUpdateRequest withRequest(openapisdk.models.shared.GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage request) {
        this.request = request;
        return this;
    }
    public FactchecktoolsPagesUpdateSecurity security;
    public FactchecktoolsPagesUpdateRequest withSecurity(FactchecktoolsPagesUpdateSecurity security) {
        this.security = security;
        return this;
    }
}