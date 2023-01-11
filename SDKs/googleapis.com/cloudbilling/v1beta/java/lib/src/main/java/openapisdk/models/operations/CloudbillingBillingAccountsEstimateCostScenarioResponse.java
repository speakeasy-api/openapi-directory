package openapisdk.models.operations;



public class CloudbillingBillingAccountsEstimateCostScenarioResponse {
    public String contentType;
    public CloudbillingBillingAccountsEstimateCostScenarioResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EstimateCostScenarioForBillingAccountResponse estimateCostScenarioForBillingAccountResponse;
    public CloudbillingBillingAccountsEstimateCostScenarioResponse withEstimateCostScenarioForBillingAccountResponse(openapisdk.models.shared.EstimateCostScenarioForBillingAccountResponse estimateCostScenarioForBillingAccountResponse) {
        this.estimateCostScenarioForBillingAccountResponse = estimateCostScenarioForBillingAccountResponse;
        return this;
    }
    public Long statusCode;
    public CloudbillingBillingAccountsEstimateCostScenarioResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}