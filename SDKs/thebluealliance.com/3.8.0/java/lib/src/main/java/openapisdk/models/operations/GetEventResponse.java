package openapisdk.models.operations;



public class GetEventResponse {
    public String contentType;
    public GetEventResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Event event;
    public GetEventResponse withEvent(openapisdk.models.shared.Event event) {
        this.event = event;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetEventResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetEventResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}