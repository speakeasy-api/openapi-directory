package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudbillingEstimateCostScenarioRequest {
    public CloudbillingEstimateCostScenarioQueryParams queryParams;
    public CloudbillingEstimateCostScenarioRequest withQueryParams(CloudbillingEstimateCostScenarioQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.EstimateCostScenarioWithListPriceRequest request;
    public CloudbillingEstimateCostScenarioRequest withRequest(openapisdk.models.shared.EstimateCostScenarioWithListPriceRequest request) {
        this.request = request;
        return this;
    }
    public CloudbillingEstimateCostScenarioSecurity security;
    public CloudbillingEstimateCostScenarioRequest withSecurity(CloudbillingEstimateCostScenarioSecurity security) {
        this.security = security;
        return this;
    }
}