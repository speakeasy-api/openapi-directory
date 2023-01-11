package openapisdk.models.operations;



public class CloudfunctionsProjectsLocationsFunctionsSetIamPolicyResponse {
    public String contentType;
    public CloudfunctionsProjectsLocationsFunctionsSetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Policy policy;
    public CloudfunctionsProjectsLocationsFunctionsSetIamPolicyResponse withPolicy(openapisdk.models.shared.Policy policy) {
        this.policy = policy;
        return this;
    }
    public Long statusCode;
    public CloudfunctionsProjectsLocationsFunctionsSetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}