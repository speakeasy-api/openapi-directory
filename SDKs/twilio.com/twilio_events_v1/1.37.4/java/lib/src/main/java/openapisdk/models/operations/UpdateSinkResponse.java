package openapisdk.models.operations;



public class UpdateSinkResponse {
    public String contentType;
    public UpdateSinkResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateSinkResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.EventsV1Sink eventsV1Sink;
    public UpdateSinkResponse withEventsV1Sink(openapisdk.models.shared.EventsV1Sink eventsV1Sink) {
        this.eventsV1Sink = eventsV1Sink;
        return this;
    }
}