package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class RefreshToken {
    @SpeakeasyMetadata("form:name=client_id")
    public String clientId;
    public RefreshToken withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @SpeakeasyMetadata("form:name=client_secret")
    public String clientSecret;
    public RefreshToken withClientSecret(String clientSecret) {
        this.clientSecret = clientSecret;
        return this;
    }
    @SpeakeasyMetadata("form:name=grant_type")
    public RefreshTokenGrantTypeEnum grantType;
    public RefreshToken withGrantType(RefreshTokenGrantTypeEnum grantType) {
        this.grantType = grantType;
        return this;
    }
    @SpeakeasyMetadata("form:name=redirect_uri")
    public String redirectUri;
    public RefreshToken withRedirectUri(String redirectUri) {
        this.redirectUri = redirectUri;
        return this;
    }
    @SpeakeasyMetadata("form:name=refresh_token")
    public String refreshToken;
    public RefreshToken withRefreshToken(String refreshToken) {
        this.refreshToken = refreshToken;
        return this;
    }
}