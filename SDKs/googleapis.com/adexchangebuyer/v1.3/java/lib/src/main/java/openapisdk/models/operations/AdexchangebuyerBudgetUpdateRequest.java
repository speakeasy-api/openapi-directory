package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdexchangebuyerBudgetUpdateRequest {
    public AdexchangebuyerBudgetUpdatePathParams pathParams;
    public AdexchangebuyerBudgetUpdateRequest withPathParams(AdexchangebuyerBudgetUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AdexchangebuyerBudgetUpdateQueryParams queryParams;
    public AdexchangebuyerBudgetUpdateRequest withQueryParams(AdexchangebuyerBudgetUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Budget request;
    public AdexchangebuyerBudgetUpdateRequest withRequest(openapisdk.models.shared.Budget request) {
        this.request = request;
        return this;
    }
    public AdexchangebuyerBudgetUpdateSecurity security;
    public AdexchangebuyerBudgetUpdateRequest withSecurity(AdexchangebuyerBudgetUpdateSecurity security) {
        this.security = security;
        return this;
    }
}