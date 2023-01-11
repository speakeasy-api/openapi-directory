package openapisdk.models.operations;



public class ResetResponse {
    public byte[] body;
    public ResetResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ResetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ResetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}