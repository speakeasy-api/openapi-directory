package openapisdk.models.operations;



public class CloudfunctionsProjectsLocationsFunctionsGetIamPolicyResponse {
    public String contentType;
    public CloudfunctionsProjectsLocationsFunctionsGetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Policy policy;
    public CloudfunctionsProjectsLocationsFunctionsGetIamPolicyResponse withPolicy(openapisdk.models.shared.Policy policy) {
        this.policy = policy;
        return this;
    }
    public Long statusCode;
    public CloudfunctionsProjectsLocationsFunctionsGetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}