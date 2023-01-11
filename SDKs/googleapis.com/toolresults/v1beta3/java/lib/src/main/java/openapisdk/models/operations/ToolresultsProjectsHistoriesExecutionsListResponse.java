package openapisdk.models.operations;



public class ToolresultsProjectsHistoriesExecutionsListResponse {
    public String contentType;
    public ToolresultsProjectsHistoriesExecutionsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListExecutionsResponse listExecutionsResponse;
    public ToolresultsProjectsHistoriesExecutionsListResponse withListExecutionsResponse(openapisdk.models.shared.ListExecutionsResponse listExecutionsResponse) {
        this.listExecutionsResponse = listExecutionsResponse;
        return this;
    }
    public Long statusCode;
    public ToolresultsProjectsHistoriesExecutionsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}