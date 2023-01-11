package openapisdk.models.operations;



public class CloudbillingBillingAccountsGetResponse {
    public openapisdk.models.shared.BillingAccount billingAccount;
    public CloudbillingBillingAccountsGetResponse withBillingAccount(openapisdk.models.shared.BillingAccount billingAccount) {
        this.billingAccount = billingAccount;
        return this;
    }
    public String contentType;
    public CloudbillingBillingAccountsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CloudbillingBillingAccountsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}