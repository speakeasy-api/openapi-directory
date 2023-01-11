package openapisdk.models.operations;



public class SecretmanagerProjectsSecretsGetIamPolicyResponse {
    public String contentType;
    public SecretmanagerProjectsSecretsGetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Policy policy;
    public SecretmanagerProjectsSecretsGetIamPolicyResponse withPolicy(openapisdk.models.shared.Policy policy) {
        this.policy = policy;
        return this;
    }
    public Long statusCode;
    public SecretmanagerProjectsSecretsGetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}