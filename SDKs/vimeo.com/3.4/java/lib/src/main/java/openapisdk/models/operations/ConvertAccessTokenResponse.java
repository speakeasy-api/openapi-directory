package openapisdk.models.operations;



public class ConvertAccessTokenResponse {
    public String contentType;
    public ConvertAccessTokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ConvertAccessTokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Auth auth;
    public ConvertAccessTokenResponse withAuth(openapisdk.models.shared.Auth auth) {
        this.auth = auth;
        return this;
    }
    public openapisdk.models.shared.AuthError authError;
    public ConvertAccessTokenResponse withAuthError(openapisdk.models.shared.AuthError authError) {
        this.authError = authError;
        return this;
    }
}