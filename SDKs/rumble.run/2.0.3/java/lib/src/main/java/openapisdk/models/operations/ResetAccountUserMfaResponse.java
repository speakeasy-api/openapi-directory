package openapisdk.models.operations;



public class ResetAccountUserMfaResponse {
    public byte[] body;
    public ResetAccountUserMfaResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ResetAccountUserMfaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ResetAccountUserMfaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}