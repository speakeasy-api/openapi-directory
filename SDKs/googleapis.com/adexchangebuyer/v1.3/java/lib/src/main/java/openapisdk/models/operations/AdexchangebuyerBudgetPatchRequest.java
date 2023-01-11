package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdexchangebuyerBudgetPatchRequest {
    public AdexchangebuyerBudgetPatchPathParams pathParams;
    public AdexchangebuyerBudgetPatchRequest withPathParams(AdexchangebuyerBudgetPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AdexchangebuyerBudgetPatchQueryParams queryParams;
    public AdexchangebuyerBudgetPatchRequest withQueryParams(AdexchangebuyerBudgetPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Budget request;
    public AdexchangebuyerBudgetPatchRequest withRequest(openapisdk.models.shared.Budget request) {
        this.request = request;
        return this;
    }
    public AdexchangebuyerBudgetPatchSecurity security;
    public AdexchangebuyerBudgetPatchRequest withSecurity(AdexchangebuyerBudgetPatchSecurity security) {
        this.security = security;
        return this;
    }
}