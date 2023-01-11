package openapisdk.models.operations;



public class YoutubeActivitiesListResponse {
    public openapisdk.models.shared.ActivityListResponse activityListResponse;
    public YoutubeActivitiesListResponse withActivityListResponse(openapisdk.models.shared.ActivityListResponse activityListResponse) {
        this.activityListResponse = activityListResponse;
        return this;
    }
    public String contentType;
    public YoutubeActivitiesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public YoutubeActivitiesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}