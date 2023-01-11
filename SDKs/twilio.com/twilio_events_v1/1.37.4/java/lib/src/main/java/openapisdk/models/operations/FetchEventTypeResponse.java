package openapisdk.models.operations;



public class FetchEventTypeResponse {
    public String contentType;
    public FetchEventTypeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchEventTypeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.EventsV1EventType eventsV1EventType;
    public FetchEventTypeResponse withEventsV1EventType(openapisdk.models.shared.EventsV1EventType eventsV1EventType) {
        this.eventsV1EventType = eventsV1EventType;
        return this;
    }
}