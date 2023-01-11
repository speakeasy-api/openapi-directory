package openapisdk.models.operations;



public class ToolresultsProjectsHistoriesExecutionsClustersListResponse {
    public String contentType;
    public ToolresultsProjectsHistoriesExecutionsClustersListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListScreenshotClustersResponse listScreenshotClustersResponse;
    public ToolresultsProjectsHistoriesExecutionsClustersListResponse withListScreenshotClustersResponse(openapisdk.models.shared.ListScreenshotClustersResponse listScreenshotClustersResponse) {
        this.listScreenshotClustersResponse = listScreenshotClustersResponse;
        return this;
    }
    public Long statusCode;
    public ToolresultsProjectsHistoriesExecutionsClustersListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}