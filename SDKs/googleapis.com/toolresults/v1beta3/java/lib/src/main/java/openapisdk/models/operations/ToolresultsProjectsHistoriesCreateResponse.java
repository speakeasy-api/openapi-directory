package openapisdk.models.operations;



public class ToolresultsProjectsHistoriesCreateResponse {
    public String contentType;
    public ToolresultsProjectsHistoriesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.History history;
    public ToolresultsProjectsHistoriesCreateResponse withHistory(openapisdk.models.shared.History history) {
        this.history = history;
        return this;
    }
    public Long statusCode;
    public ToolresultsProjectsHistoriesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}