package openapisdk.models.operations;



public class MybusinessbusinesscallsLocationsBusinesscallsinsightsListResponse {
    public String contentType;
    public MybusinessbusinesscallsLocationsBusinesscallsinsightsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListBusinessCallsInsightsResponse listBusinessCallsInsightsResponse;
    public MybusinessbusinesscallsLocationsBusinesscallsinsightsListResponse withListBusinessCallsInsightsResponse(openapisdk.models.shared.ListBusinessCallsInsightsResponse listBusinessCallsInsightsResponse) {
        this.listBusinessCallsInsightsResponse = listBusinessCallsInsightsResponse;
        return this;
    }
    public Long statusCode;
    public MybusinessbusinesscallsLocationsBusinesscallsinsightsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}