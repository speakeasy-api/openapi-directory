package openapisdk.models.operations;



public class ToolresultsProjectsHistoriesExecutionsGetResponse {
    public String contentType;
    public ToolresultsProjectsHistoriesExecutionsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Execution execution;
    public ToolresultsProjectsHistoriesExecutionsGetResponse withExecution(openapisdk.models.shared.Execution execution) {
        this.execution = execution;
        return this;
    }
    public Long statusCode;
    public ToolresultsProjectsHistoriesExecutionsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}