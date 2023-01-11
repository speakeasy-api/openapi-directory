package openapisdk.models.operations;



public class CloudbillingBillingAccountsCreateResponse {
    public openapisdk.models.shared.BillingAccount billingAccount;
    public CloudbillingBillingAccountsCreateResponse withBillingAccount(openapisdk.models.shared.BillingAccount billingAccount) {
        this.billingAccount = billingAccount;
        return this;
    }
    public String contentType;
    public CloudbillingBillingAccountsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CloudbillingBillingAccountsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}