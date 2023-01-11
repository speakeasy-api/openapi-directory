package openapisdk.models.operations;



public class DataprocProjectsRegionsWorkflowTemplatesCreateResponse {
    public String contentType;
    public DataprocProjectsRegionsWorkflowTemplatesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DataprocProjectsRegionsWorkflowTemplatesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.WorkflowTemplate workflowTemplate;
    public DataprocProjectsRegionsWorkflowTemplatesCreateResponse withWorkflowTemplate(openapisdk.models.shared.WorkflowTemplate workflowTemplate) {
        this.workflowTemplate = workflowTemplate;
        return this;
    }
}