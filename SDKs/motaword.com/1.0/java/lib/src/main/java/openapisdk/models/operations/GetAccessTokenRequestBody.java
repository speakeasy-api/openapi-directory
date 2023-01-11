package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAccessTokenRequestBody {
    @SpeakeasyMetadata("multipartForm:name=grant_type")
    public String grantType;
    public GetAccessTokenRequestBody withGrantType(String grantType) {
        this.grantType = grantType;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=password")
    public String password;
    public GetAccessTokenRequestBody withPassword(String password) {
        this.password = password;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=refresh_token")
    public String refreshToken;
    public GetAccessTokenRequestBody withRefreshToken(String refreshToken) {
        this.refreshToken = refreshToken;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=scope")
    public String scope;
    public GetAccessTokenRequestBody withScope(String scope) {
        this.scope = scope;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=user_id")
    public Long userId;
    public GetAccessTokenRequestBody withUserId(Long userId) {
        this.userId = userId;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=username")
    public String username;
    public GetAccessTokenRequestBody withUsername(String username) {
        this.username = username;
        return this;
    }
}