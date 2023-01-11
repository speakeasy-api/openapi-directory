package openapisdk.models.operations;



public class GetBillingResponse {
    public openapisdk.models.shared.Billing billing;
    public GetBillingResponse withBilling(openapisdk.models.shared.Billing billing) {
        this.billing = billing;
        return this;
    }
    public String contentType;
    public GetBillingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetBillingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}