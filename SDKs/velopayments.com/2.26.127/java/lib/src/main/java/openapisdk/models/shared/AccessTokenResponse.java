package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AccessTokenResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("access_token")
    public String accessToken;
    public AccessTokenResponse withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entityIds")
    public String[] entityIds;
    public AccessTokenResponse withEntityIds(String[] entityIds) {
        this.entityIds = entityIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expires_in")
    public Long expiresIn;
    public AccessTokenResponse withExpiresIn(Long expiresIn) {
        this.expiresIn = expiresIn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refresh_token")
    public String refreshToken;
    public AccessTokenResponse withRefreshToken(String refreshToken) {
        this.refreshToken = refreshToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scope")
    public String scope;
    public AccessTokenResponse withScope(String scope) {
        this.scope = scope;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("token_type")
    public String tokenType;
    public AccessTokenResponse withTokenType(String tokenType) {
        this.tokenType = tokenType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_info")
    public UserInfo userInfo;
    public AccessTokenResponse withUserInfo(UserInfo userInfo) {
        this.userInfo = userInfo;
        return this;
    }
}