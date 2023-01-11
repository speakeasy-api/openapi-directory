package openapisdk.models.operations;



public class PostAuthResponse {
    public openapisdk.models.shared.AuthenticationTokenResponse authenticationTokenResponse;
    public PostAuthResponse withAuthenticationTokenResponse(openapisdk.models.shared.AuthenticationTokenResponse authenticationTokenResponse) {
        this.authenticationTokenResponse = authenticationTokenResponse;
        return this;
    }
    public String contentType;
    public PostAuthResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostAuthResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}