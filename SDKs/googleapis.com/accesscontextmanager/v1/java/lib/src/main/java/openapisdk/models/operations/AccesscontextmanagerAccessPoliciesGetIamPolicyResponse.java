package openapisdk.models.operations;



public class AccesscontextmanagerAccessPoliciesGetIamPolicyResponse {
    public String contentType;
    public AccesscontextmanagerAccessPoliciesGetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Policy policy;
    public AccesscontextmanagerAccessPoliciesGetIamPolicyResponse withPolicy(openapisdk.models.shared.Policy policy) {
        this.policy = policy;
        return this;
    }
    public Long statusCode;
    public AccesscontextmanagerAccessPoliciesGetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}