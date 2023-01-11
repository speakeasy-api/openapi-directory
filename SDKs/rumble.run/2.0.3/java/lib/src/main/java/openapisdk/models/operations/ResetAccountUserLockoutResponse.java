package openapisdk.models.operations;



public class ResetAccountUserLockoutResponse {
    public byte[] body;
    public ResetAccountUserLockoutResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ResetAccountUserLockoutResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ResetAccountUserLockoutResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}