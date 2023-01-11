package openapisdk.models.operations;



public class PostDetectResponse {
    public byte[] body;
    public PostDetectResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDetectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDetectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}