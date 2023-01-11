package openapisdk.models.operations;



public class PublishEventVideosResponse {
    public byte[] body;
    public PublishEventVideosResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PublishEventVideosResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PublishEventVideosResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}