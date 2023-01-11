package openapisdk.models.operations;



public class WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionResponse {
    public String contentType;
    public WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Execution execution;
    public WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionResponse withExecution(openapisdk.models.shared.Execution execution) {
        this.execution = execution;
        return this;
    }
    public Long statusCode;
    public WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}