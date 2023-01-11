package openapisdk.models.operations;



public class IamProjectsServiceAccountsGetIamPolicyResponse {
    public String contentType;
    public IamProjectsServiceAccountsGetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Policy policy;
    public IamProjectsServiceAccountsGetIamPolicyResponse withPolicy(openapisdk.models.shared.Policy policy) {
        this.policy = policy;
        return this;
    }
    public Long statusCode;
    public IamProjectsServiceAccountsGetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}