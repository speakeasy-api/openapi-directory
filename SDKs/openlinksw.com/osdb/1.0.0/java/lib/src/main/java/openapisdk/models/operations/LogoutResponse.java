package openapisdk.models.operations;



public class LogoutResponse {
    public String contentType;
    public LogoutResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public LogoutResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.LogoutResponse logoutResponse;
    public LogoutResponse withLogoutResponse(openapisdk.models.shared.LogoutResponse logoutResponse) {
        this.logoutResponse = logoutResponse;
        return this;
    }
    public Long statusCode;
    public LogoutResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}