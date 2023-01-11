package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SetAccountInfoResponse
 * Respone of setting the account information.
**/
public class SetAccountInfoResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public SetAccountInfoResponse withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public SetAccountInfoResponse withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emailVerified")
    public Boolean emailVerified;
    public SetAccountInfoResponse withEmailVerified(Boolean emailVerified) {
        this.emailVerified = emailVerified;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expiresIn")
    public String expiresIn;
    public SetAccountInfoResponse withExpiresIn(String expiresIn) {
        this.expiresIn = expiresIn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("idToken")
    public String idToken;
    public SetAccountInfoResponse withIdToken(String idToken) {
        this.idToken = idToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public SetAccountInfoResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("localId")
    public String localId;
    public SetAccountInfoResponse withLocalId(String localId) {
        this.localId = localId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("newEmail")
    public String newEmail;
    public SetAccountInfoResponse withNewEmail(String newEmail) {
        this.newEmail = newEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("passwordHash")
    public String passwordHash;
    public SetAccountInfoResponse withPasswordHash(String passwordHash) {
        this.passwordHash = passwordHash;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("photoUrl")
    public String photoUrl;
    public SetAccountInfoResponse withPhotoUrl(String photoUrl) {
        this.photoUrl = photoUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("providerUserInfo")
    public SetAccountInfoResponseProviderUserInfo[] providerUserInfo;
    public SetAccountInfoResponse withProviderUserInfo(SetAccountInfoResponseProviderUserInfo[] providerUserInfo) {
        this.providerUserInfo = providerUserInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refreshToken")
    public String refreshToken;
    public SetAccountInfoResponse withRefreshToken(String refreshToken) {
        this.refreshToken = refreshToken;
        return this;
    }
}