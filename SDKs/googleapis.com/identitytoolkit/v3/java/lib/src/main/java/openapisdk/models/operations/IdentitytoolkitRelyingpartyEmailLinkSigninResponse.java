package openapisdk.models.operations;



public class IdentitytoolkitRelyingpartyEmailLinkSigninResponse {
    public String contentType;
    public IdentitytoolkitRelyingpartyEmailLinkSigninResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EmailLinkSigninResponse emailLinkSigninResponse;
    public IdentitytoolkitRelyingpartyEmailLinkSigninResponse withEmailLinkSigninResponse(openapisdk.models.shared.EmailLinkSigninResponse emailLinkSigninResponse) {
        this.emailLinkSigninResponse = emailLinkSigninResponse;
        return this;
    }
    public Long statusCode;
    public IdentitytoolkitRelyingpartyEmailLinkSigninResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}