package openapisdk.models.operations;



public class DataprocProjectsRegionsWorkflowTemplatesUpdateResponse {
    public String contentType;
    public DataprocProjectsRegionsWorkflowTemplatesUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DataprocProjectsRegionsWorkflowTemplatesUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.WorkflowTemplate workflowTemplate;
    public DataprocProjectsRegionsWorkflowTemplatesUpdateResponse withWorkflowTemplate(openapisdk.models.shared.WorkflowTemplate workflowTemplate) {
        this.workflowTemplate = workflowTemplate;
        return this;
    }
}