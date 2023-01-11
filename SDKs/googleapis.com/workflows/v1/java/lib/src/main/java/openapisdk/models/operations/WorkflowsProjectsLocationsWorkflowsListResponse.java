package openapisdk.models.operations;



public class WorkflowsProjectsLocationsWorkflowsListResponse {
    public String contentType;
    public WorkflowsProjectsLocationsWorkflowsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListWorkflowsResponse listWorkflowsResponse;
    public WorkflowsProjectsLocationsWorkflowsListResponse withListWorkflowsResponse(openapisdk.models.shared.ListWorkflowsResponse listWorkflowsResponse) {
        this.listWorkflowsResponse = listWorkflowsResponse;
        return this;
    }
    public Long statusCode;
    public WorkflowsProjectsLocationsWorkflowsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}