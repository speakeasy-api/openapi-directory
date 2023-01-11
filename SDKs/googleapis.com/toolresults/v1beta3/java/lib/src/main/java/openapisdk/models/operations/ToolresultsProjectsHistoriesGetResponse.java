package openapisdk.models.operations;



public class ToolresultsProjectsHistoriesGetResponse {
    public String contentType;
    public ToolresultsProjectsHistoriesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.History history;
    public ToolresultsProjectsHistoriesGetResponse withHistory(openapisdk.models.shared.History history) {
        this.history = history;
        return this;
    }
    public Long statusCode;
    public ToolresultsProjectsHistoriesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}