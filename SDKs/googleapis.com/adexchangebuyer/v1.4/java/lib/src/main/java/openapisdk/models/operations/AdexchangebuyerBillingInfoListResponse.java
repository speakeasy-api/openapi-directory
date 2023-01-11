package openapisdk.models.operations;



public class AdexchangebuyerBillingInfoListResponse {
    public openapisdk.models.shared.BillingInfoList billingInfoList;
    public AdexchangebuyerBillingInfoListResponse withBillingInfoList(openapisdk.models.shared.BillingInfoList billingInfoList) {
        this.billingInfoList = billingInfoList;
        return this;
    }
    public String contentType;
    public AdexchangebuyerBillingInfoListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AdexchangebuyerBillingInfoListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}