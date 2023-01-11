package openapisdk.models.operations;



public class CreateSinkResponse {
    public String contentType;
    public CreateSinkResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateSinkResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.EventsV1Sink eventsV1Sink;
    public CreateSinkResponse withEventsV1Sink(openapisdk.models.shared.EventsV1Sink eventsV1Sink) {
        this.eventsV1Sink = eventsV1Sink;
        return this;
    }
}