package openapisdk.models.operations;



public class ToolresultsProjectsHistoriesExecutionsStepsThumbnailsListResponse {
    public String contentType;
    public ToolresultsProjectsHistoriesExecutionsStepsThumbnailsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListStepThumbnailsResponse listStepThumbnailsResponse;
    public ToolresultsProjectsHistoriesExecutionsStepsThumbnailsListResponse withListStepThumbnailsResponse(openapisdk.models.shared.ListStepThumbnailsResponse listStepThumbnailsResponse) {
        this.listStepThumbnailsResponse = listStepThumbnailsResponse;
        return this;
    }
    public Long statusCode;
    public ToolresultsProjectsHistoriesExecutionsStepsThumbnailsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}