package openapisdk.models.operations;



public class WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListResponse {
    public String contentType;
    public WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListExecutionsResponse listExecutionsResponse;
    public WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListResponse withListExecutionsResponse(openapisdk.models.shared.ListExecutionsResponse listExecutionsResponse) {
        this.listExecutionsResponse = listExecutionsResponse;
        return this;
    }
    public Long statusCode;
    public WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}