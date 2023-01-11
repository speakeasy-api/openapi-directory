package openapisdk.models.operations;



public class AccesscontextmanagerAccessPoliciesSetIamPolicyResponse {
    public String contentType;
    public AccesscontextmanagerAccessPoliciesSetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Policy policy;
    public AccesscontextmanagerAccessPoliciesSetIamPolicyResponse withPolicy(openapisdk.models.shared.Policy policy) {
        this.policy = policy;
        return this;
    }
    public Long statusCode;
    public AccesscontextmanagerAccessPoliciesSetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}