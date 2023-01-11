package openapisdk.models.operations;



public class PublishEntitlementsResponse {
    public byte[] body;
    public PublishEntitlementsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PublishEntitlementsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PublishEntitlementsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}