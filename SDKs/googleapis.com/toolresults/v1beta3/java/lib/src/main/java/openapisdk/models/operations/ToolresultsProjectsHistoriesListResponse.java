package openapisdk.models.operations;



public class ToolresultsProjectsHistoriesListResponse {
    public String contentType;
    public ToolresultsProjectsHistoriesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListHistoriesResponse listHistoriesResponse;
    public ToolresultsProjectsHistoriesListResponse withListHistoriesResponse(openapisdk.models.shared.ListHistoriesResponse listHistoriesResponse) {
        this.listHistoriesResponse = listHistoriesResponse;
        return this;
    }
    public Long statusCode;
    public ToolresultsProjectsHistoriesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}