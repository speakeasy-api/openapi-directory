package openapisdk.models.operations;



public class GetMeActivitiesResponse {
    public openapisdk.models.shared.Activities activities;
    public GetMeActivitiesResponse withActivities(openapisdk.models.shared.Activities activities) {
        this.activities = activities;
        return this;
    }
    public String contentType;
    public GetMeActivitiesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetMeActivitiesResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetMeActivitiesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}