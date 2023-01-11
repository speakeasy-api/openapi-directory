package openapisdk.models.operations;



public class ExchangeAuthCodeResponse {
    public String contentType;
    public ExchangeAuthCodeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ExchangeAuthCodeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Auth auth;
    public ExchangeAuthCodeResponse withAuth(openapisdk.models.shared.Auth auth) {
        this.auth = auth;
        return this;
    }
    public openapisdk.models.shared.AuthError authError;
    public ExchangeAuthCodeResponse withAuthError(openapisdk.models.shared.AuthError authError) {
        this.authError = authError;
        return this;
    }
}