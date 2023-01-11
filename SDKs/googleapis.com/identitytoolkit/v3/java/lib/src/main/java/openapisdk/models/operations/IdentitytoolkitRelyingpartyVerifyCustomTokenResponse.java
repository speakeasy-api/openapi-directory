package openapisdk.models.operations;



public class IdentitytoolkitRelyingpartyVerifyCustomTokenResponse {
    public String contentType;
    public IdentitytoolkitRelyingpartyVerifyCustomTokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public IdentitytoolkitRelyingpartyVerifyCustomTokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VerifyCustomTokenResponse verifyCustomTokenResponse;
    public IdentitytoolkitRelyingpartyVerifyCustomTokenResponse withVerifyCustomTokenResponse(openapisdk.models.shared.VerifyCustomTokenResponse verifyCustomTokenResponse) {
        this.verifyCustomTokenResponse = verifyCustomTokenResponse;
        return this;
    }
}