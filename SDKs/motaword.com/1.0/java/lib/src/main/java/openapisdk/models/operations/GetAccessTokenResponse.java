package openapisdk.models.operations;



public class GetAccessTokenResponse {
    public String contentType;
    public GetAccessTokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAccessTokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object token;
    public GetAccessTokenResponse withToken(Object token) {
        this.token = token;
        return this;
    }
    public openapisdk.models.shared.TokenError tokenError;
    public GetAccessTokenResponse withTokenError(openapisdk.models.shared.TokenError tokenError) {
        this.tokenError = tokenError;
        return this;
    }
}