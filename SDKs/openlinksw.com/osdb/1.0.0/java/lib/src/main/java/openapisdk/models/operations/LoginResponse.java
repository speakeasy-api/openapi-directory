package openapisdk.models.operations;



public class LoginResponse {
    public String contentType;
    public LoginResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public LoginResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.LoginResponse loginResponse;
    public LoginResponse withLoginResponse(openapisdk.models.shared.LoginResponse loginResponse) {
        this.loginResponse = loginResponse;
        return this;
    }
    public Long statusCode;
    public LoginResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}