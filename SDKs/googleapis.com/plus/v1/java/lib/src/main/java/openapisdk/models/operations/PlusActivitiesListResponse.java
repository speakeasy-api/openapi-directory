package openapisdk.models.operations;



public class PlusActivitiesListResponse {
    public openapisdk.models.shared.ActivityFeed activityFeed;
    public PlusActivitiesListResponse withActivityFeed(openapisdk.models.shared.ActivityFeed activityFeed) {
        this.activityFeed = activityFeed;
        return this;
    }
    public String contentType;
    public PlusActivitiesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PlusActivitiesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}