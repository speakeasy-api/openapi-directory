package openapisdk.models.operations;



public class ToolresultsProjectsHistoriesExecutionsCreateResponse {
    public String contentType;
    public ToolresultsProjectsHistoriesExecutionsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Execution execution;
    public ToolresultsProjectsHistoriesExecutionsCreateResponse withExecution(openapisdk.models.shared.Execution execution) {
        this.execution = execution;
        return this;
    }
    public Long statusCode;
    public ToolresultsProjectsHistoriesExecutionsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}