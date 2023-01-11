package openapisdk.models.operations;



public class UnpublishIterationResponse {
    public byte[] body;
    public UnpublishIterationResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public UnpublishIterationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UnpublishIterationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}