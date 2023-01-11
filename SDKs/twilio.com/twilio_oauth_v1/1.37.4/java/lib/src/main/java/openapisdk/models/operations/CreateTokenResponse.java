package openapisdk.models.operations;



public class CreateTokenResponse {
    public String contentType;
    public CreateTokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateTokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.OauthV1Token oauthV1Token;
    public CreateTokenResponse withOauthV1Token(openapisdk.models.shared.OauthV1Token oauthV1Token) {
        this.oauthV1Token = oauthV1Token;
        return this;
    }
}