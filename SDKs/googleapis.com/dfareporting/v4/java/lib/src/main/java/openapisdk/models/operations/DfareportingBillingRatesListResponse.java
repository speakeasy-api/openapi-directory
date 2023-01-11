package openapisdk.models.operations;



public class DfareportingBillingRatesListResponse {
    public openapisdk.models.shared.BillingRatesListResponse billingRatesListResponse;
    public DfareportingBillingRatesListResponse withBillingRatesListResponse(openapisdk.models.shared.BillingRatesListResponse billingRatesListResponse) {
        this.billingRatesListResponse = billingRatesListResponse;
        return this;
    }
    public String contentType;
    public DfareportingBillingRatesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DfareportingBillingRatesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}