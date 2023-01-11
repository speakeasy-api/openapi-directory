package openapisdk.models.operations;



public class WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCreateResponse {
    public String contentType;
    public WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Execution execution;
    public WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCreateResponse withExecution(openapisdk.models.shared.Execution execution) {
        this.execution = execution;
        return this;
    }
    public Long statusCode;
    public WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}