package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RefreshTokenInfoResponse {
    @JsonProperty("client_id")
    public String clientId;
    public RefreshTokenInfoResponse withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hub_domain")
    public String hubDomain;
    public RefreshTokenInfoResponse withHubDomain(String hubDomain) {
        this.hubDomain = hubDomain;
        return this;
    }
    @JsonProperty("hub_id")
    public Integer hubId;
    public RefreshTokenInfoResponse withHubId(Integer hubId) {
        this.hubId = hubId;
        return this;
    }
    @JsonProperty("scopes")
    public String[] scopes;
    public RefreshTokenInfoResponse withScopes(String[] scopes) {
        this.scopes = scopes;
        return this;
    }
    @JsonProperty("token")
    public String token;
    public RefreshTokenInfoResponse withToken(String token) {
        this.token = token;
        return this;
    }
    @JsonProperty("token_type")
    public String tokenType;
    public RefreshTokenInfoResponse withTokenType(String tokenType) {
        this.tokenType = tokenType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user")
    public String user;
    public RefreshTokenInfoResponse withUser(String user) {
        this.user = user;
        return this;
    }
    @JsonProperty("user_id")
    public Integer userId;
    public RefreshTokenInfoResponse withUserId(Integer userId) {
        this.userId = userId;
        return this;
    }
}