package openapisdk.models.operations;



public class IdentitytoolkitRelyingpartyGetOobConfirmationCodeResponse {
    public String contentType;
    public IdentitytoolkitRelyingpartyGetOobConfirmationCodeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetOobConfirmationCodeResponse getOobConfirmationCodeResponse;
    public IdentitytoolkitRelyingpartyGetOobConfirmationCodeResponse withGetOobConfirmationCodeResponse(openapisdk.models.shared.GetOobConfirmationCodeResponse getOobConfirmationCodeResponse) {
        this.getOobConfirmationCodeResponse = getOobConfirmationCodeResponse;
        return this;
    }
    public Long statusCode;
    public IdentitytoolkitRelyingpartyGetOobConfirmationCodeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}