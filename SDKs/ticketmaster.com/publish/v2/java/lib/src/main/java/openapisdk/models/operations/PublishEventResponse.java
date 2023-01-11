package openapisdk.models.operations;



public class PublishEventResponse {
    public byte[] body;
    public PublishEventResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PublishEventResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PublishEventResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}