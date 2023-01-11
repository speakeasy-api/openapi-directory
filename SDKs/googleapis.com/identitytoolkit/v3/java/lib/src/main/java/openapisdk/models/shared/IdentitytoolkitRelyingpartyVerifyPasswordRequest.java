package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IdentitytoolkitRelyingpartyVerifyPasswordRequest
 * Request to verify the password.
**/
public class IdentitytoolkitRelyingpartyVerifyPasswordRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("captchaChallenge")
    public String captchaChallenge;
    public IdentitytoolkitRelyingpartyVerifyPasswordRequest withCaptchaChallenge(String captchaChallenge) {
        this.captchaChallenge = captchaChallenge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("captchaResponse")
    public String captchaResponse;
    public IdentitytoolkitRelyingpartyVerifyPasswordRequest withCaptchaResponse(String captchaResponse) {
        this.captchaResponse = captchaResponse;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("delegatedProjectNumber")
    public String delegatedProjectNumber;
    public IdentitytoolkitRelyingpartyVerifyPasswordRequest withDelegatedProjectNumber(String delegatedProjectNumber) {
        this.delegatedProjectNumber = delegatedProjectNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public IdentitytoolkitRelyingpartyVerifyPasswordRequest withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("idToken")
    public String idToken;
    public IdentitytoolkitRelyingpartyVerifyPasswordRequest withIdToken(String idToken) {
        this.idToken = idToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceId")
    public String instanceId;
    public IdentitytoolkitRelyingpartyVerifyPasswordRequest withInstanceId(String instanceId) {
        this.instanceId = instanceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
    public String password;
    public IdentitytoolkitRelyingpartyVerifyPasswordRequest withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pendingIdToken")
    public String pendingIdToken;
    public IdentitytoolkitRelyingpartyVerifyPasswordRequest withPendingIdToken(String pendingIdToken) {
        this.pendingIdToken = pendingIdToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("returnSecureToken")
    public Boolean returnSecureToken;
    public IdentitytoolkitRelyingpartyVerifyPasswordRequest withReturnSecureToken(Boolean returnSecureToken) {
        this.returnSecureToken = returnSecureToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tenantId")
    public String tenantId;
    public IdentitytoolkitRelyingpartyVerifyPasswordRequest withTenantId(String tenantId) {
        this.tenantId = tenantId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tenantProjectNumber")
    public String tenantProjectNumber;
    public IdentitytoolkitRelyingpartyVerifyPasswordRequest withTenantProjectNumber(String tenantProjectNumber) {
        this.tenantProjectNumber = tenantProjectNumber;
        return this;
    }
}