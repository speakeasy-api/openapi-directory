package openapisdk.models.operations;



public class SecretmanagerProjectsSecretsSetIamPolicyResponse {
    public String contentType;
    public SecretmanagerProjectsSecretsSetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Policy policy;
    public SecretmanagerProjectsSecretsSetIamPolicyResponse withPolicy(openapisdk.models.shared.Policy policy) {
        this.policy = policy;
        return this;
    }
    public Long statusCode;
    public SecretmanagerProjectsSecretsSetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}