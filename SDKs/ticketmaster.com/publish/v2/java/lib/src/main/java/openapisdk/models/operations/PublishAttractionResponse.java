package openapisdk.models.operations;



public class PublishAttractionResponse {
    public byte[] body;
    public PublishAttractionResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PublishAttractionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PublishAttractionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}