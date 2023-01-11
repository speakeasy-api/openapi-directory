package openapisdk.models.operations;



public class CreateSinkTestResponse {
    public String contentType;
    public CreateSinkTestResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateSinkTestResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.EventsV1SinkSinkTest eventsV1SinkSinkTest;
    public CreateSinkTestResponse withEventsV1SinkSinkTest(openapisdk.models.shared.EventsV1SinkSinkTest eventsV1SinkSinkTest) {
        this.eventsV1SinkSinkTest = eventsV1SinkSinkTest;
        return this;
    }
}