package openapisdk.models.operations;



public class GetEventResponse {
    public String contentType;
    public GetEventResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetEventResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.EventRetrieved eventRetrieved;
    public GetEventResponse withEventRetrieved(openapisdk.models.shared.EventRetrieved eventRetrieved) {
        this.eventRetrieved = eventRetrieved;
        return this;
    }
}