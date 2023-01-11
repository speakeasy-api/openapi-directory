package openapisdk.models.operations;



public class ReportsActivitiesListResponse {
    public openapisdk.models.shared.Activities activities;
    public ReportsActivitiesListResponse withActivities(openapisdk.models.shared.Activities activities) {
        this.activities = activities;
        return this;
    }
    public String contentType;
    public ReportsActivitiesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReportsActivitiesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}