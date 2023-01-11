package openapisdk.models.operations;



public class IdentitytoolkitRelyingpartyVerifyPasswordResponse {
    public String contentType;
    public IdentitytoolkitRelyingpartyVerifyPasswordResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public IdentitytoolkitRelyingpartyVerifyPasswordResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VerifyPasswordResponse verifyPasswordResponse;
    public IdentitytoolkitRelyingpartyVerifyPasswordResponse withVerifyPasswordResponse(openapisdk.models.shared.VerifyPasswordResponse verifyPasswordResponse) {
        this.verifyPasswordResponse = verifyPasswordResponse;
        return this;
    }
}