package openapisdk.models.operations;



public class GetEventByIdResponse {
    public String contentType;
    public GetEventByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Event event;
    public GetEventByIdResponse withEvent(openapisdk.models.shared.Event event) {
        this.event = event;
        return this;
    }
    public Long statusCode;
    public GetEventByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}