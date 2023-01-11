package openapisdk.models.operations;



public class GetEventsResponse {
    public byte[] body;
    public GetEventsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetEventsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetEventsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}