package openapisdk.models.operations;



public class IdentitytoolkitRelyingpartySignupNewUserResponse {
    public String contentType;
    public IdentitytoolkitRelyingpartySignupNewUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SignupNewUserResponse signupNewUserResponse;
    public IdentitytoolkitRelyingpartySignupNewUserResponse withSignupNewUserResponse(openapisdk.models.shared.SignupNewUserResponse signupNewUserResponse) {
        this.signupNewUserResponse = signupNewUserResponse;
        return this;
    }
    public Long statusCode;
    public IdentitytoolkitRelyingpartySignupNewUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}