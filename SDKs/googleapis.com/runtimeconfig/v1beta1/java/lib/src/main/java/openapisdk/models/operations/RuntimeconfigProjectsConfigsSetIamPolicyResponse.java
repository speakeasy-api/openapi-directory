package openapisdk.models.operations;



public class RuntimeconfigProjectsConfigsSetIamPolicyResponse {
    public String contentType;
    public RuntimeconfigProjectsConfigsSetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Policy policy;
    public RuntimeconfigProjectsConfigsSetIamPolicyResponse withPolicy(openapisdk.models.shared.Policy policy) {
        this.policy = policy;
        return this;
    }
    public Long statusCode;
    public RuntimeconfigProjectsConfigsSetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}