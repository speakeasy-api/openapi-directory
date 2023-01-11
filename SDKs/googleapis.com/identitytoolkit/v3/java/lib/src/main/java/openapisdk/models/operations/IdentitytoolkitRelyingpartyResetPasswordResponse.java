package openapisdk.models.operations;



public class IdentitytoolkitRelyingpartyResetPasswordResponse {
    public String contentType;
    public IdentitytoolkitRelyingpartyResetPasswordResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResetPasswordResponse resetPasswordResponse;
    public IdentitytoolkitRelyingpartyResetPasswordResponse withResetPasswordResponse(openapisdk.models.shared.ResetPasswordResponse resetPasswordResponse) {
        this.resetPasswordResponse = resetPasswordResponse;
        return this;
    }
    public Long statusCode;
    public IdentitytoolkitRelyingpartyResetPasswordResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}