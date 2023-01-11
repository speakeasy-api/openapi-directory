package openapisdk.models.operations;



public class GetOauthV1AccessTokensTokenGetAccessTokenResponse {
    public openapisdk.models.shared.AccessTokenInfoResponse accessTokenInfoResponse;
    public GetOauthV1AccessTokensTokenGetAccessTokenResponse withAccessTokenInfoResponse(openapisdk.models.shared.AccessTokenInfoResponse accessTokenInfoResponse) {
        this.accessTokenInfoResponse = accessTokenInfoResponse;
        return this;
    }
    public byte[] body;
    public GetOauthV1AccessTokensTokenGetAccessTokenResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetOauthV1AccessTokensTokenGetAccessTokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetOauthV1AccessTokensTokenGetAccessTokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}