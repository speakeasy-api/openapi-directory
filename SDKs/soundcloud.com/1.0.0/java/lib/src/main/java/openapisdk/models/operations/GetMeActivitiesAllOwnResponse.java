package openapisdk.models.operations;



public class GetMeActivitiesAllOwnResponse {
    public openapisdk.models.shared.Activities activities;
    public GetMeActivitiesAllOwnResponse withActivities(openapisdk.models.shared.Activities activities) {
        this.activities = activities;
        return this;
    }
    public String contentType;
    public GetMeActivitiesAllOwnResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetMeActivitiesAllOwnResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetMeActivitiesAllOwnResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}