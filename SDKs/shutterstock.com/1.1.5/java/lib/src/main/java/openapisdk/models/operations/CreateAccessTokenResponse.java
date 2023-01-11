package openapisdk.models.operations;



public class CreateAccessTokenResponse {
    public String contentType;
    public CreateAccessTokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.OauthAccessTokenResponse oauthAccessTokenResponse;
    public CreateAccessTokenResponse withOauthAccessTokenResponse(openapisdk.models.shared.OauthAccessTokenResponse oauthAccessTokenResponse) {
        this.oauthAccessTokenResponse = oauthAccessTokenResponse;
        return this;
    }
    public Long statusCode;
    public CreateAccessTokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}