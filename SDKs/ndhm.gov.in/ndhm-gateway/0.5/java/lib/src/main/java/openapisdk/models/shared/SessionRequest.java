package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SessionRequest {
    @JsonProperty("clientId")
    public String clientId;
    public SessionRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonProperty("clientSecret")
    public String clientSecret;
    public SessionRequest withClientSecret(String clientSecret) {
        this.clientSecret = clientSecret;
        return this;
    }
    @JsonProperty("grantType")
    public SessionRequestGrantTypeEnum grantType;
    public SessionRequest withGrantType(SessionRequestGrantTypeEnum grantType) {
        this.grantType = grantType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refreshToken")
    public String refreshToken;
    public SessionRequest withRefreshToken(String refreshToken) {
        this.refreshToken = refreshToken;
        return this;
    }
}