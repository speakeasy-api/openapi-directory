package openapisdk.models.operations;



public class ValidateAccessTokenResponse {
    public openapisdk.models.shared.AccessTokenResponse accessTokenResponse;
    public ValidateAccessTokenResponse withAccessTokenResponse(openapisdk.models.shared.AccessTokenResponse accessTokenResponse) {
        this.accessTokenResponse = accessTokenResponse;
        return this;
    }
    public String contentType;
    public ValidateAccessTokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ValidateAccessTokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object inlineResponse401;
    public ValidateAccessTokenResponse withInlineResponse401(Object inlineResponse401) {
        this.inlineResponse401 = inlineResponse401;
        return this;
    }
    public Object inlineResponse403;
    public ValidateAccessTokenResponse withInlineResponse403(Object inlineResponse403) {
        this.inlineResponse403 = inlineResponse403;
        return this;
    }
}