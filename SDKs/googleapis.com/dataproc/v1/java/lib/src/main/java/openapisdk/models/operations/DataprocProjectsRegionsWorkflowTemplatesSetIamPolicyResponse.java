package openapisdk.models.operations;



public class DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyResponse {
    public String contentType;
    public DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Policy policy;
    public DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyResponse withPolicy(openapisdk.models.shared.Policy policy) {
        this.policy = policy;
        return this;
    }
    public Long statusCode;
    public DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}