package openapisdk.models.operations;



public class RunNamespacesExecutionsCancelResponse {
    public String contentType;
    public RunNamespacesExecutionsCancelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Execution execution;
    public RunNamespacesExecutionsCancelResponse withExecution(openapisdk.models.shared.Execution execution) {
        this.execution = execution;
        return this;
    }
    public Long statusCode;
    public RunNamespacesExecutionsCancelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}