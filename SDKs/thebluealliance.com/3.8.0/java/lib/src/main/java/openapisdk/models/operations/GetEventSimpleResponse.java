package openapisdk.models.operations;



public class GetEventSimpleResponse {
    public String contentType;
    public GetEventSimpleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EventSimple eventSimple;
    public GetEventSimpleResponse withEventSimple(openapisdk.models.shared.EventSimple eventSimple) {
        this.eventSimple = eventSimple;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetEventSimpleResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetEventSimpleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}