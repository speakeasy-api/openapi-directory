package openapisdk.models.operations;



public class AdexchangebuyerBillingInfoGetResponse {
    public openapisdk.models.shared.BillingInfo billingInfo;
    public AdexchangebuyerBillingInfoGetResponse withBillingInfo(openapisdk.models.shared.BillingInfo billingInfo) {
        this.billingInfo = billingInfo;
        return this;
    }
    public String contentType;
    public AdexchangebuyerBillingInfoGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AdexchangebuyerBillingInfoGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}