package openapisdk.models.operations;



public class CloudbillingBillingAccountsSetIamPolicyResponse {
    public String contentType;
    public CloudbillingBillingAccountsSetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Policy policy;
    public CloudbillingBillingAccountsSetIamPolicyResponse withPolicy(openapisdk.models.shared.Policy policy) {
        this.policy = policy;
        return this;
    }
    public Long statusCode;
    public CloudbillingBillingAccountsSetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}