package openapisdk.models.operations;



public class PostEventsV3SendResponse {
    public byte[] body;
    public PostEventsV3SendResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostEventsV3SendResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostEventsV3SendResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}