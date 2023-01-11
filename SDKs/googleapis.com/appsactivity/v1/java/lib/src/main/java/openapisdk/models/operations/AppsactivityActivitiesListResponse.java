package openapisdk.models.operations;



public class AppsactivityActivitiesListResponse {
    public String contentType;
    public AppsactivityActivitiesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListActivitiesResponse listActivitiesResponse;
    public AppsactivityActivitiesListResponse withListActivitiesResponse(openapisdk.models.shared.ListActivitiesResponse listActivitiesResponse) {
        this.listActivitiesResponse = listActivitiesResponse;
        return this;
    }
    public Long statusCode;
    public AppsactivityActivitiesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}