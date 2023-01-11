package openapisdk.models.operations;



public class IdentitytoolkitRelyingpartyGetAccountInfoResponse {
    public String contentType;
    public IdentitytoolkitRelyingpartyGetAccountInfoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetAccountInfoResponse getAccountInfoResponse;
    public IdentitytoolkitRelyingpartyGetAccountInfoResponse withGetAccountInfoResponse(openapisdk.models.shared.GetAccountInfoResponse getAccountInfoResponse) {
        this.getAccountInfoResponse = getAccountInfoResponse;
        return this;
    }
    public Long statusCode;
    public IdentitytoolkitRelyingpartyGetAccountInfoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}