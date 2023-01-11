package openapisdk.models.operations;



public class DataprocProjectsRegionsWorkflowTemplatesGetIamPolicyResponse {
    public String contentType;
    public DataprocProjectsRegionsWorkflowTemplatesGetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Policy policy;
    public DataprocProjectsRegionsWorkflowTemplatesGetIamPolicyResponse withPolicy(openapisdk.models.shared.Policy policy) {
        this.policy = policy;
        return this;
    }
    public Long statusCode;
    public DataprocProjectsRegionsWorkflowTemplatesGetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}