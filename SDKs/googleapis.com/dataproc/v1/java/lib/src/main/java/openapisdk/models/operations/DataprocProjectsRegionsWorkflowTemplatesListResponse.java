package openapisdk.models.operations;



public class DataprocProjectsRegionsWorkflowTemplatesListResponse {
    public String contentType;
    public DataprocProjectsRegionsWorkflowTemplatesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListWorkflowTemplatesResponse listWorkflowTemplatesResponse;
    public DataprocProjectsRegionsWorkflowTemplatesListResponse withListWorkflowTemplatesResponse(openapisdk.models.shared.ListWorkflowTemplatesResponse listWorkflowTemplatesResponse) {
        this.listWorkflowTemplatesResponse = listWorkflowTemplatesResponse;
        return this;
    }
    public Long statusCode;
    public DataprocProjectsRegionsWorkflowTemplatesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}