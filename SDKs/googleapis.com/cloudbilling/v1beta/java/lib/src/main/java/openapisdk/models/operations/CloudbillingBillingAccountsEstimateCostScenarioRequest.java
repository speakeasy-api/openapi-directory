package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudbillingBillingAccountsEstimateCostScenarioRequest {
    public CloudbillingBillingAccountsEstimateCostScenarioPathParams pathParams;
    public CloudbillingBillingAccountsEstimateCostScenarioRequest withPathParams(CloudbillingBillingAccountsEstimateCostScenarioPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudbillingBillingAccountsEstimateCostScenarioQueryParams queryParams;
    public CloudbillingBillingAccountsEstimateCostScenarioRequest withQueryParams(CloudbillingBillingAccountsEstimateCostScenarioQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.EstimateCostScenarioForBillingAccountRequest request;
    public CloudbillingBillingAccountsEstimateCostScenarioRequest withRequest(openapisdk.models.shared.EstimateCostScenarioForBillingAccountRequest request) {
        this.request = request;
        return this;
    }
    public CloudbillingBillingAccountsEstimateCostScenarioSecurity security;
    public CloudbillingBillingAccountsEstimateCostScenarioRequest withSecurity(CloudbillingBillingAccountsEstimateCostScenarioSecurity security) {
        this.security = security;
        return this;
    }
}