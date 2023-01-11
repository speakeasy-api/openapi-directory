package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IdentitytoolkitRelyingpartySignupNewUserRequest
 * Request to signup new user, create anonymous user or anonymous user reauth.
**/
public class IdentitytoolkitRelyingpartySignupNewUserRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("captchaChallenge")
    public String captchaChallenge;
    public IdentitytoolkitRelyingpartySignupNewUserRequest withCaptchaChallenge(String captchaChallenge) {
        this.captchaChallenge = captchaChallenge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("captchaResponse")
    public String captchaResponse;
    public IdentitytoolkitRelyingpartySignupNewUserRequest withCaptchaResponse(String captchaResponse) {
        this.captchaResponse = captchaResponse;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disabled")
    public Boolean disabled;
    public IdentitytoolkitRelyingpartySignupNewUserRequest withDisabled(Boolean disabled) {
        this.disabled = disabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public IdentitytoolkitRelyingpartySignupNewUserRequest withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public IdentitytoolkitRelyingpartySignupNewUserRequest withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emailVerified")
    public Boolean emailVerified;
    public IdentitytoolkitRelyingpartySignupNewUserRequest withEmailVerified(Boolean emailVerified) {
        this.emailVerified = emailVerified;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("idToken")
    public String idToken;
    public IdentitytoolkitRelyingpartySignupNewUserRequest withIdToken(String idToken) {
        this.idToken = idToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceId")
    public String instanceId;
    public IdentitytoolkitRelyingpartySignupNewUserRequest withInstanceId(String instanceId) {
        this.instanceId = instanceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("localId")
    public String localId;
    public IdentitytoolkitRelyingpartySignupNewUserRequest withLocalId(String localId) {
        this.localId = localId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
    public String password;
    public IdentitytoolkitRelyingpartySignupNewUserRequest withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phoneNumber")
    public String phoneNumber;
    public IdentitytoolkitRelyingpartySignupNewUserRequest withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("photoUrl")
    public String photoUrl;
    public IdentitytoolkitRelyingpartySignupNewUserRequest withPhotoUrl(String photoUrl) {
        this.photoUrl = photoUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tenantId")
    public String tenantId;
    public IdentitytoolkitRelyingpartySignupNewUserRequest withTenantId(String tenantId) {
        this.tenantId = tenantId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tenantProjectNumber")
    public String tenantProjectNumber;
    public IdentitytoolkitRelyingpartySignupNewUserRequest withTenantProjectNumber(String tenantProjectNumber) {
        this.tenantProjectNumber = tenantProjectNumber;
        return this;
    }
}