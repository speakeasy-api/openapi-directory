package openapisdk.models.operations;



public class ToolresultsProjectsHistoriesExecutionsPatchResponse {
    public String contentType;
    public ToolresultsProjectsHistoriesExecutionsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Execution execution;
    public ToolresultsProjectsHistoriesExecutionsPatchResponse withExecution(openapisdk.models.shared.Execution execution) {
        this.execution = execution;
        return this;
    }
    public Long statusCode;
    public ToolresultsProjectsHistoriesExecutionsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}