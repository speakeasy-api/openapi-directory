package openapisdk.models.operations;



public class PlusActivitiesSearchResponse {
    public openapisdk.models.shared.ActivityFeed activityFeed;
    public PlusActivitiesSearchResponse withActivityFeed(openapisdk.models.shared.ActivityFeed activityFeed) {
        this.activityFeed = activityFeed;
        return this;
    }
    public String contentType;
    public PlusActivitiesSearchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PlusActivitiesSearchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}