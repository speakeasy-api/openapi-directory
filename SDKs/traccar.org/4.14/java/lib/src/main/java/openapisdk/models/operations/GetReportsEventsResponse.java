package openapisdk.models.operations;



public class GetReportsEventsResponse {
    public byte[] body;
    public GetReportsEventsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetReportsEventsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Event[] events;
    public GetReportsEventsResponse withEvents(openapisdk.models.shared.Event[] events) {
        this.events = events;
        return this;
    }
    public Long statusCode;
    public GetReportsEventsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}