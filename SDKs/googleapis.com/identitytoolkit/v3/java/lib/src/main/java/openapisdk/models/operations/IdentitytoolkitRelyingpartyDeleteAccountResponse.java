package openapisdk.models.operations;



public class IdentitytoolkitRelyingpartyDeleteAccountResponse {
    public String contentType;
    public IdentitytoolkitRelyingpartyDeleteAccountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteAccountResponse deleteAccountResponse;
    public IdentitytoolkitRelyingpartyDeleteAccountResponse withDeleteAccountResponse(openapisdk.models.shared.DeleteAccountResponse deleteAccountResponse) {
        this.deleteAccountResponse = deleteAccountResponse;
        return this;
    }
    public Long statusCode;
    public IdentitytoolkitRelyingpartyDeleteAccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}