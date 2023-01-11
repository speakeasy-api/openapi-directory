package openapisdk.models.operations;



public class IdentitytoolkitRelyingpartySetAccountInfoResponse {
    public String contentType;
    public IdentitytoolkitRelyingpartySetAccountInfoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SetAccountInfoResponse setAccountInfoResponse;
    public IdentitytoolkitRelyingpartySetAccountInfoResponse withSetAccountInfoResponse(openapisdk.models.shared.SetAccountInfoResponse setAccountInfoResponse) {
        this.setAccountInfoResponse = setAccountInfoResponse;
        return this;
    }
    public Long statusCode;
    public IdentitytoolkitRelyingpartySetAccountInfoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}