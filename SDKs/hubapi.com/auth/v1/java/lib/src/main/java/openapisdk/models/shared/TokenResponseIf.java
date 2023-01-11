package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TokenResponseIf {
    @JsonProperty("access_token")
    public String accessToken;
    public TokenResponseIf withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @JsonProperty("expires_in")
    public Integer expiresIn;
    public TokenResponseIf withExpiresIn(Integer expiresIn) {
        this.expiresIn = expiresIn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id_token")
    public String idToken;
    public TokenResponseIf withIdToken(String idToken) {
        this.idToken = idToken;
        return this;
    }
    @JsonProperty("refresh_token")
    public String refreshToken;
    public TokenResponseIf withRefreshToken(String refreshToken) {
        this.refreshToken = refreshToken;
        return this;
    }
    @JsonProperty("token_type")
    public String tokenType;
    public TokenResponseIf withTokenType(String tokenType) {
        this.tokenType = tokenType;
        return this;
    }
}