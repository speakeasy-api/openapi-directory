package openapisdk.models.operations;



public class IamProjectsServiceAccountsSetIamPolicyResponse {
    public String contentType;
    public IamProjectsServiceAccountsSetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Policy policy;
    public IamProjectsServiceAccountsSetIamPolicyResponse withPolicy(openapisdk.models.shared.Policy policy) {
        this.policy = policy;
        return this;
    }
    public Long statusCode;
    public IamProjectsServiceAccountsSetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}