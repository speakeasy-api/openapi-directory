package openapisdk.models.operations;



public class ToolresultsProjectsHistoriesExecutionsClustersGetResponse {
    public String contentType;
    public ToolresultsProjectsHistoriesExecutionsClustersGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ScreenshotCluster screenshotCluster;
    public ToolresultsProjectsHistoriesExecutionsClustersGetResponse withScreenshotCluster(openapisdk.models.shared.ScreenshotCluster screenshotCluster) {
        this.screenshotCluster = screenshotCluster;
        return this;
    }
    public Long statusCode;
    public ToolresultsProjectsHistoriesExecutionsClustersGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}