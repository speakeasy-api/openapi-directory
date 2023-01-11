package openapisdk.models.operations;



public class DataprocProjectsRegionsWorkflowTemplatesGetResponse {
    public String contentType;
    public DataprocProjectsRegionsWorkflowTemplatesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DataprocProjectsRegionsWorkflowTemplatesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.WorkflowTemplate workflowTemplate;
    public DataprocProjectsRegionsWorkflowTemplatesGetResponse withWorkflowTemplate(openapisdk.models.shared.WorkflowTemplate workflowTemplate) {
        this.workflowTemplate = workflowTemplate;
        return this;
    }
}