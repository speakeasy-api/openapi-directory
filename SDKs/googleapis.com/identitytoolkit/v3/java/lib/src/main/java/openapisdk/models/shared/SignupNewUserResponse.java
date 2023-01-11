package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SignupNewUserResponse
 * Response of signing up new user, creating anonymous user or anonymous user reauth.
**/
public class SignupNewUserResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public SignupNewUserResponse withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public SignupNewUserResponse withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expiresIn")
    public String expiresIn;
    public SignupNewUserResponse withExpiresIn(String expiresIn) {
        this.expiresIn = expiresIn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("idToken")
    public String idToken;
    public SignupNewUserResponse withIdToken(String idToken) {
        this.idToken = idToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public SignupNewUserResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("localId")
    public String localId;
    public SignupNewUserResponse withLocalId(String localId) {
        this.localId = localId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refreshToken")
    public String refreshToken;
    public SignupNewUserResponse withRefreshToken(String refreshToken) {
        this.refreshToken = refreshToken;
        return this;
    }
}