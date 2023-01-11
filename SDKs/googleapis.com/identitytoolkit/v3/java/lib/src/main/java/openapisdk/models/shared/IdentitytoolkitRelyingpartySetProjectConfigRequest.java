package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IdentitytoolkitRelyingpartySetProjectConfigRequest
 * Request to set the project configuration.
**/
public class IdentitytoolkitRelyingpartySetProjectConfigRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowPasswordUser")
    public Boolean allowPasswordUser;
    public IdentitytoolkitRelyingpartySetProjectConfigRequest withAllowPasswordUser(Boolean allowPasswordUser) {
        this.allowPasswordUser = allowPasswordUser;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apiKey")
    public String apiKey;
    public IdentitytoolkitRelyingpartySetProjectConfigRequest withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorizedDomains")
    public String[] authorizedDomains;
    public IdentitytoolkitRelyingpartySetProjectConfigRequest withAuthorizedDomains(String[] authorizedDomains) {
        this.authorizedDomains = authorizedDomains;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("changeEmailTemplate")
    public EmailTemplate changeEmailTemplate;
    public IdentitytoolkitRelyingpartySetProjectConfigRequest withChangeEmailTemplate(EmailTemplate changeEmailTemplate) {
        this.changeEmailTemplate = changeEmailTemplate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("delegatedProjectNumber")
    public String delegatedProjectNumber;
    public IdentitytoolkitRelyingpartySetProjectConfigRequest withDelegatedProjectNumber(String delegatedProjectNumber) {
        this.delegatedProjectNumber = delegatedProjectNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableAnonymousUser")
    public Boolean enableAnonymousUser;
    public IdentitytoolkitRelyingpartySetProjectConfigRequest withEnableAnonymousUser(Boolean enableAnonymousUser) {
        this.enableAnonymousUser = enableAnonymousUser;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("idpConfig")
    public IdpConfig[] idpConfig;
    public IdentitytoolkitRelyingpartySetProjectConfigRequest withIdpConfig(IdpConfig[] idpConfig) {
        this.idpConfig = idpConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("legacyResetPasswordTemplate")
    public EmailTemplate legacyResetPasswordTemplate;
    public IdentitytoolkitRelyingpartySetProjectConfigRequest withLegacyResetPasswordTemplate(EmailTemplate legacyResetPasswordTemplate) {
        this.legacyResetPasswordTemplate = legacyResetPasswordTemplate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resetPasswordTemplate")
    public EmailTemplate resetPasswordTemplate;
    public IdentitytoolkitRelyingpartySetProjectConfigRequest withResetPasswordTemplate(EmailTemplate resetPasswordTemplate) {
        this.resetPasswordTemplate = resetPasswordTemplate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("useEmailSending")
    public Boolean useEmailSending;
    public IdentitytoolkitRelyingpartySetProjectConfigRequest withUseEmailSending(Boolean useEmailSending) {
        this.useEmailSending = useEmailSending;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verifyEmailTemplate")
    public EmailTemplate verifyEmailTemplate;
    public IdentitytoolkitRelyingpartySetProjectConfigRequest withVerifyEmailTemplate(EmailTemplate verifyEmailTemplate) {
        this.verifyEmailTemplate = verifyEmailTemplate;
        return this;
    }
}