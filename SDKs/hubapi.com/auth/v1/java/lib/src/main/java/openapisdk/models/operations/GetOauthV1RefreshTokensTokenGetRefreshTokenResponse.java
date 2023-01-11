package openapisdk.models.operations;



public class GetOauthV1RefreshTokensTokenGetRefreshTokenResponse {
    public byte[] body;
    public GetOauthV1RefreshTokensTokenGetRefreshTokenResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetOauthV1RefreshTokensTokenGetRefreshTokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RefreshTokenInfoResponse refreshTokenInfoResponse;
    public GetOauthV1RefreshTokensTokenGetRefreshTokenResponse withRefreshTokenInfoResponse(openapisdk.models.shared.RefreshTokenInfoResponse refreshTokenInfoResponse) {
        this.refreshTokenInfoResponse = refreshTokenInfoResponse;
        return this;
    }
    public Long statusCode;
    public GetOauthV1RefreshTokensTokenGetRefreshTokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}