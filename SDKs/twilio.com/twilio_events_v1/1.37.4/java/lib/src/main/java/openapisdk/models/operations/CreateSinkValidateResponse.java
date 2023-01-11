package openapisdk.models.operations;



public class CreateSinkValidateResponse {
    public String contentType;
    public CreateSinkValidateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateSinkValidateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.EventsV1SinkSinkValidate eventsV1SinkSinkValidate;
    public CreateSinkValidateResponse withEventsV1SinkSinkValidate(openapisdk.models.shared.EventsV1SinkSinkValidate eventsV1SinkSinkValidate) {
        this.eventsV1SinkSinkValidate = eventsV1SinkSinkValidate;
        return this;
    }
}