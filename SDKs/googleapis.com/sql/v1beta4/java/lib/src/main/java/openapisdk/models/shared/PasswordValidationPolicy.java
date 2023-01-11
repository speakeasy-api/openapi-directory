package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PasswordValidationPolicy
 * Database instance local user password validation policy
**/
public class PasswordValidationPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("complexity")
    public PasswordValidationPolicyComplexityEnum complexity;
    public PasswordValidationPolicy withComplexity(PasswordValidationPolicyComplexityEnum complexity) {
        this.complexity = complexity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disallowUsernameSubstring")
    public Boolean disallowUsernameSubstring;
    public PasswordValidationPolicy withDisallowUsernameSubstring(Boolean disallowUsernameSubstring) {
        this.disallowUsernameSubstring = disallowUsernameSubstring;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enablePasswordPolicy")
    public Boolean enablePasswordPolicy;
    public PasswordValidationPolicy withEnablePasswordPolicy(Boolean enablePasswordPolicy) {
        this.enablePasswordPolicy = enablePasswordPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minLength")
    public Integer minLength;
    public PasswordValidationPolicy withMinLength(Integer minLength) {
        this.minLength = minLength;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("passwordChangeInterval")
    public String passwordChangeInterval;
    public PasswordValidationPolicy withPasswordChangeInterval(String passwordChangeInterval) {
        this.passwordChangeInterval = passwordChangeInterval;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reuseInterval")
    public Integer reuseInterval;
    public PasswordValidationPolicy withReuseInterval(Integer reuseInterval) {
        this.reuseInterval = reuseInterval;
        return this;
    }
}