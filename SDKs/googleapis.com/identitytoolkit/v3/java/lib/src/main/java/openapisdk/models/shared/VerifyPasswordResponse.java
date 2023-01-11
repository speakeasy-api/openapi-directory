package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VerifyPasswordResponse
 * Request of verifying the password.
**/
public class VerifyPasswordResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public VerifyPasswordResponse withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public VerifyPasswordResponse withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expiresIn")
    public String expiresIn;
    public VerifyPasswordResponse withExpiresIn(String expiresIn) {
        this.expiresIn = expiresIn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("idToken")
    public String idToken;
    public VerifyPasswordResponse withIdToken(String idToken) {
        this.idToken = idToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public VerifyPasswordResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("localId")
    public String localId;
    public VerifyPasswordResponse withLocalId(String localId) {
        this.localId = localId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oauthAccessToken")
    public String oauthAccessToken;
    public VerifyPasswordResponse withOauthAccessToken(String oauthAccessToken) {
        this.oauthAccessToken = oauthAccessToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oauthAuthorizationCode")
    public String oauthAuthorizationCode;
    public VerifyPasswordResponse withOauthAuthorizationCode(String oauthAuthorizationCode) {
        this.oauthAuthorizationCode = oauthAuthorizationCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oauthExpireIn")
    public Integer oauthExpireIn;
    public VerifyPasswordResponse withOauthExpireIn(Integer oauthExpireIn) {
        this.oauthExpireIn = oauthExpireIn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("photoUrl")
    public String photoUrl;
    public VerifyPasswordResponse withPhotoUrl(String photoUrl) {
        this.photoUrl = photoUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refreshToken")
    public String refreshToken;
    public VerifyPasswordResponse withRefreshToken(String refreshToken) {
        this.refreshToken = refreshToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registered")
    public Boolean registered;
    public VerifyPasswordResponse withRegistered(Boolean registered) {
        this.registered = registered;
        return this;
    }
}