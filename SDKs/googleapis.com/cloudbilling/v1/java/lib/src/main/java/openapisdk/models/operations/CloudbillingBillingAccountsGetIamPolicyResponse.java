package openapisdk.models.operations;



public class CloudbillingBillingAccountsGetIamPolicyResponse {
    public String contentType;
    public CloudbillingBillingAccountsGetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Policy policy;
    public CloudbillingBillingAccountsGetIamPolicyResponse withPolicy(openapisdk.models.shared.Policy policy) {
        this.policy = policy;
        return this;
    }
    public Long statusCode;
    public CloudbillingBillingAccountsGetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}