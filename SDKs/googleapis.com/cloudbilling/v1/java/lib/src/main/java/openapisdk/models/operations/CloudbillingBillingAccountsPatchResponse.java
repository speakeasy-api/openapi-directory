package openapisdk.models.operations;



public class CloudbillingBillingAccountsPatchResponse {
    public openapisdk.models.shared.BillingAccount billingAccount;
    public CloudbillingBillingAccountsPatchResponse withBillingAccount(openapisdk.models.shared.BillingAccount billingAccount) {
        this.billingAccount = billingAccount;
        return this;
    }
    public String contentType;
    public CloudbillingBillingAccountsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CloudbillingBillingAccountsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}