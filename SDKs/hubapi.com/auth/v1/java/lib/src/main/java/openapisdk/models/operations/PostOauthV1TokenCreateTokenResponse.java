package openapisdk.models.operations;



public class PostOauthV1TokenCreateTokenResponse {
    public byte[] body;
    public PostOauthV1TokenCreateTokenResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostOauthV1TokenCreateTokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostOauthV1TokenCreateTokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TokenResponseIf tokenResponseIF;
    public PostOauthV1TokenCreateTokenResponse withTokenResponseIf(openapisdk.models.shared.TokenResponseIf tokenResponseIF) {
        this.tokenResponseIF = tokenResponseIF;
        return this;
    }
}