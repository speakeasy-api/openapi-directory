package openapisdk.models.operations;



public class GetActivitiesResponse {
    public openapisdk.models.shared.ActivityList activityList;
    public GetActivitiesResponse withActivityList(openapisdk.models.shared.ActivityList activityList) {
        this.activityList = activityList;
        return this;
    }
    public String contentType;
    public GetActivitiesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetActivitiesResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetActivitiesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}