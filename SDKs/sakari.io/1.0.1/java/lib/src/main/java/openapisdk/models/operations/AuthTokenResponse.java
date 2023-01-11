package openapisdk.models.operations;



public class AuthTokenResponse {
    public String contentType;
    public AuthTokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AuthTokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TokenResponse tokenResponse;
    public AuthTokenResponse withTokenResponse(openapisdk.models.shared.TokenResponse tokenResponse) {
        this.tokenResponse = tokenResponse;
        return this;
    }
}