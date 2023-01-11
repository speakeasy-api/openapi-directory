package openapisdk.models.operations;



public class WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetResponse {
    public String contentType;
    public WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Execution execution;
    public WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetResponse withExecution(openapisdk.models.shared.Execution execution) {
        this.execution = execution;
        return this;
    }
    public Long statusCode;
    public WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}