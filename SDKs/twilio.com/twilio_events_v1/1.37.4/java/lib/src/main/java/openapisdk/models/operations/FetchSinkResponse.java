package openapisdk.models.operations;



public class FetchSinkResponse {
    public String contentType;
    public FetchSinkResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchSinkResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.EventsV1Sink eventsV1Sink;
    public FetchSinkResponse withEventsV1Sink(openapisdk.models.shared.EventsV1Sink eventsV1Sink) {
        this.eventsV1Sink = eventsV1Sink;
        return this;
    }
}