package openapisdk.models.operations;



public class IdentitytoolkitRelyingpartyVerifyAssertionResponse {
    public String contentType;
    public IdentitytoolkitRelyingpartyVerifyAssertionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public IdentitytoolkitRelyingpartyVerifyAssertionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VerifyAssertionResponse verifyAssertionResponse;
    public IdentitytoolkitRelyingpartyVerifyAssertionResponse withVerifyAssertionResponse(openapisdk.models.shared.VerifyAssertionResponse verifyAssertionResponse) {
        this.verifyAssertionResponse = verifyAssertionResponse;
        return this;
    }
}