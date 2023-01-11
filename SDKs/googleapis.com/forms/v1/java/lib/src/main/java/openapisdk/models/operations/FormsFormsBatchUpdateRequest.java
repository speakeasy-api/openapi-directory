package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FormsFormsBatchUpdateRequest {
    public FormsFormsBatchUpdatePathParams pathParams;
    public FormsFormsBatchUpdateRequest withPathParams(FormsFormsBatchUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FormsFormsBatchUpdateQueryParams queryParams;
    public FormsFormsBatchUpdateRequest withQueryParams(FormsFormsBatchUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchUpdateFormRequestInput request;
    public FormsFormsBatchUpdateRequest withRequest(openapisdk.models.shared.BatchUpdateFormRequestInput request) {
        this.request = request;
        return this;
    }
    public FormsFormsBatchUpdateSecurity security;
    public FormsFormsBatchUpdateRequest withSecurity(FormsFormsBatchUpdateSecurity security) {
        this.security = security;
        return this;
    }
}