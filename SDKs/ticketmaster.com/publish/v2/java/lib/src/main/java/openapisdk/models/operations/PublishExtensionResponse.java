package openapisdk.models.operations;



public class PublishExtensionResponse {
    public byte[] body;
    public PublishExtensionResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PublishExtensionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PublishExtensionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}