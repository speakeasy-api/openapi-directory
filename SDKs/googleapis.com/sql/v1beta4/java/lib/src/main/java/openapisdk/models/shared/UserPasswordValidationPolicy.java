package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UserPasswordValidationPolicy
 * User level password validation policy.
**/
public class UserPasswordValidationPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowedFailedAttempts")
    public Integer allowedFailedAttempts;
    public UserPasswordValidationPolicy withAllowedFailedAttempts(Integer allowedFailedAttempts) {
        this.allowedFailedAttempts = allowedFailedAttempts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableFailedAttemptsCheck")
    public Boolean enableFailedAttemptsCheck;
    public UserPasswordValidationPolicy withEnableFailedAttemptsCheck(Boolean enableFailedAttemptsCheck) {
        this.enableFailedAttemptsCheck = enableFailedAttemptsCheck;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enablePasswordVerification")
    public Boolean enablePasswordVerification;
    public UserPasswordValidationPolicy withEnablePasswordVerification(Boolean enablePasswordVerification) {
        this.enablePasswordVerification = enablePasswordVerification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("passwordExpirationDuration")
    public String passwordExpirationDuration;
    public UserPasswordValidationPolicy withPasswordExpirationDuration(String passwordExpirationDuration) {
        this.passwordExpirationDuration = passwordExpirationDuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public PasswordStatus status;
    public UserPasswordValidationPolicy withStatus(PasswordStatus status) {
        this.status = status;
        return this;
    }
}