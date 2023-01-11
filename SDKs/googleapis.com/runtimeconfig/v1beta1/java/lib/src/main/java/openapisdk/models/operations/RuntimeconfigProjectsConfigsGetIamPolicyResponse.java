package openapisdk.models.operations;



public class RuntimeconfigProjectsConfigsGetIamPolicyResponse {
    public String contentType;
    public RuntimeconfigProjectsConfigsGetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Policy policy;
    public RuntimeconfigProjectsConfigsGetIamPolicyResponse withPolicy(openapisdk.models.shared.Policy policy) {
        this.policy = policy;
        return this;
    }
    public Long statusCode;
    public RuntimeconfigProjectsConfigsGetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}