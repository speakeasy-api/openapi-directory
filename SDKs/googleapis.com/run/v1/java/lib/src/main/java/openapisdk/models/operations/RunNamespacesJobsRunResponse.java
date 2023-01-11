package openapisdk.models.operations;



public class RunNamespacesJobsRunResponse {
    public String contentType;
    public RunNamespacesJobsRunResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Execution execution;
    public RunNamespacesJobsRunResponse withExecution(openapisdk.models.shared.Execution execution) {
        this.execution = execution;
        return this;
    }
    public Long statusCode;
    public RunNamespacesJobsRunResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}