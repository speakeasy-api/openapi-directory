package openapisdk.models.operations;



public class WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelResponse {
    public String contentType;
    public WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Execution execution;
    public WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelResponse withExecution(openapisdk.models.shared.Execution execution) {
        this.execution = execution;
        return this;
    }
    public Long statusCode;
    public WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}