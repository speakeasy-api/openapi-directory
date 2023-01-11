package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateOrganizationLoginSecurityRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountLockoutAttempts")
    public Long accountLockoutAttempts;
    public UpdateOrganizationLoginSecurityRequestBody withAccountLockoutAttempts(Long accountLockoutAttempts) {
        this.accountLockoutAttempts = accountLockoutAttempts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enforceAccountLockout")
    public Boolean enforceAccountLockout;
    public UpdateOrganizationLoginSecurityRequestBody withEnforceAccountLockout(Boolean enforceAccountLockout) {
        this.enforceAccountLockout = enforceAccountLockout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enforceDifferentPasswords")
    public Boolean enforceDifferentPasswords;
    public UpdateOrganizationLoginSecurityRequestBody withEnforceDifferentPasswords(Boolean enforceDifferentPasswords) {
        this.enforceDifferentPasswords = enforceDifferentPasswords;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enforceIdleTimeout")
    public Boolean enforceIdleTimeout;
    public UpdateOrganizationLoginSecurityRequestBody withEnforceIdleTimeout(Boolean enforceIdleTimeout) {
        this.enforceIdleTimeout = enforceIdleTimeout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enforceLoginIpRanges")
    public Boolean enforceLoginIpRanges;
    public UpdateOrganizationLoginSecurityRequestBody withEnforceLoginIpRanges(Boolean enforceLoginIpRanges) {
        this.enforceLoginIpRanges = enforceLoginIpRanges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enforcePasswordExpiration")
    public Boolean enforcePasswordExpiration;
    public UpdateOrganizationLoginSecurityRequestBody withEnforcePasswordExpiration(Boolean enforcePasswordExpiration) {
        this.enforcePasswordExpiration = enforcePasswordExpiration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enforceStrongPasswords")
    public Boolean enforceStrongPasswords;
    public UpdateOrganizationLoginSecurityRequestBody withEnforceStrongPasswords(Boolean enforceStrongPasswords) {
        this.enforceStrongPasswords = enforceStrongPasswords;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enforceTwoFactorAuth")
    public Boolean enforceTwoFactorAuth;
    public UpdateOrganizationLoginSecurityRequestBody withEnforceTwoFactorAuth(Boolean enforceTwoFactorAuth) {
        this.enforceTwoFactorAuth = enforceTwoFactorAuth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("idleTimeoutMinutes")
    public Long idleTimeoutMinutes;
    public UpdateOrganizationLoginSecurityRequestBody withIdleTimeoutMinutes(Long idleTimeoutMinutes) {
        this.idleTimeoutMinutes = idleTimeoutMinutes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loginIpRanges")
    public String[] loginIpRanges;
    public UpdateOrganizationLoginSecurityRequestBody withLoginIpRanges(String[] loginIpRanges) {
        this.loginIpRanges = loginIpRanges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numDifferentPasswords")
    public Long numDifferentPasswords;
    public UpdateOrganizationLoginSecurityRequestBody withNumDifferentPasswords(Long numDifferentPasswords) {
        this.numDifferentPasswords = numDifferentPasswords;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("passwordExpirationDays")
    public Long passwordExpirationDays;
    public UpdateOrganizationLoginSecurityRequestBody withPasswordExpirationDays(Long passwordExpirationDays) {
        this.passwordExpirationDays = passwordExpirationDays;
        return this;
    }
}