package openapisdk.models.operations;



public class GetEventsByYearResponse {
    public String contentType;
    public GetEventsByYearResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Event[] events;
    public GetEventsByYearResponse withEvents(openapisdk.models.shared.Event[] events) {
        this.events = events;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetEventsByYearResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetEventsByYearResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}