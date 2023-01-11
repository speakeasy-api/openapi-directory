package openapisdk.models.operations;



public class GetMeActivitiesTracksResponse {
    public openapisdk.models.shared.Activities activities;
    public GetMeActivitiesTracksResponse withActivities(openapisdk.models.shared.Activities activities) {
        this.activities = activities;
        return this;
    }
    public String contentType;
    public GetMeActivitiesTracksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetMeActivitiesTracksResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetMeActivitiesTracksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}