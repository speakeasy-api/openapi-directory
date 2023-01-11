package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VerifyCustomTokenResponse
 * Response from verifying a custom token
**/
public class VerifyCustomTokenResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expiresIn")
    public String expiresIn;
    public VerifyCustomTokenResponse withExpiresIn(String expiresIn) {
        this.expiresIn = expiresIn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("idToken")
    public String idToken;
    public VerifyCustomTokenResponse withIdToken(String idToken) {
        this.idToken = idToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isNewUser")
    public Boolean isNewUser;
    public VerifyCustomTokenResponse withIsNewUser(Boolean isNewUser) {
        this.isNewUser = isNewUser;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public VerifyCustomTokenResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refreshToken")
    public String refreshToken;
    public VerifyCustomTokenResponse withRefreshToken(String refreshToken) {
        this.refreshToken = refreshToken;
        return this;
    }
}