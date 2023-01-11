package openapisdk.models.operations;



public class CloudbillingEstimateCostScenarioResponse {
    public String contentType;
    public CloudbillingEstimateCostScenarioResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EstimateCostScenarioWithListPriceResponse estimateCostScenarioWithListPriceResponse;
    public CloudbillingEstimateCostScenarioResponse withEstimateCostScenarioWithListPriceResponse(openapisdk.models.shared.EstimateCostScenarioWithListPriceResponse estimateCostScenarioWithListPriceResponse) {
        this.estimateCostScenarioWithListPriceResponse = estimateCostScenarioWithListPriceResponse;
        return this;
    }
    public Long statusCode;
    public CloudbillingEstimateCostScenarioResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}