package openapisdk.models.operations;



public class GetDistrictEventsResponse {
    public String contentType;
    public GetDistrictEventsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Event[] events;
    public GetDistrictEventsResponse withEvents(openapisdk.models.shared.Event[] events) {
        this.events = events;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetDistrictEventsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetDistrictEventsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}