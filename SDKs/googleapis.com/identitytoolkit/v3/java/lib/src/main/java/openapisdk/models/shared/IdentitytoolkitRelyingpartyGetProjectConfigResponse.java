package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IdentitytoolkitRelyingpartyGetProjectConfigResponse
 * Response of getting the project configuration.
**/
public class IdentitytoolkitRelyingpartyGetProjectConfigResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowPasswordUser")
    public Boolean allowPasswordUser;
    public IdentitytoolkitRelyingpartyGetProjectConfigResponse withAllowPasswordUser(Boolean allowPasswordUser) {
        this.allowPasswordUser = allowPasswordUser;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apiKey")
    public String apiKey;
    public IdentitytoolkitRelyingpartyGetProjectConfigResponse withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorizedDomains")
    public String[] authorizedDomains;
    public IdentitytoolkitRelyingpartyGetProjectConfigResponse withAuthorizedDomains(String[] authorizedDomains) {
        this.authorizedDomains = authorizedDomains;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("changeEmailTemplate")
    public EmailTemplate changeEmailTemplate;
    public IdentitytoolkitRelyingpartyGetProjectConfigResponse withChangeEmailTemplate(EmailTemplate changeEmailTemplate) {
        this.changeEmailTemplate = changeEmailTemplate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dynamicLinksDomain")
    public String dynamicLinksDomain;
    public IdentitytoolkitRelyingpartyGetProjectConfigResponse withDynamicLinksDomain(String dynamicLinksDomain) {
        this.dynamicLinksDomain = dynamicLinksDomain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableAnonymousUser")
    public Boolean enableAnonymousUser;
    public IdentitytoolkitRelyingpartyGetProjectConfigResponse withEnableAnonymousUser(Boolean enableAnonymousUser) {
        this.enableAnonymousUser = enableAnonymousUser;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("idpConfig")
    public IdpConfig[] idpConfig;
    public IdentitytoolkitRelyingpartyGetProjectConfigResponse withIdpConfig(IdpConfig[] idpConfig) {
        this.idpConfig = idpConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("legacyResetPasswordTemplate")
    public EmailTemplate legacyResetPasswordTemplate;
    public IdentitytoolkitRelyingpartyGetProjectConfigResponse withLegacyResetPasswordTemplate(EmailTemplate legacyResetPasswordTemplate) {
        this.legacyResetPasswordTemplate = legacyResetPasswordTemplate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projectId")
    public String projectId;
    public IdentitytoolkitRelyingpartyGetProjectConfigResponse withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resetPasswordTemplate")
    public EmailTemplate resetPasswordTemplate;
    public IdentitytoolkitRelyingpartyGetProjectConfigResponse withResetPasswordTemplate(EmailTemplate resetPasswordTemplate) {
        this.resetPasswordTemplate = resetPasswordTemplate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("useEmailSending")
    public Boolean useEmailSending;
    public IdentitytoolkitRelyingpartyGetProjectConfigResponse withUseEmailSending(Boolean useEmailSending) {
        this.useEmailSending = useEmailSending;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verifyEmailTemplate")
    public EmailTemplate verifyEmailTemplate;
    public IdentitytoolkitRelyingpartyGetProjectConfigResponse withVerifyEmailTemplate(EmailTemplate verifyEmailTemplate) {
        this.verifyEmailTemplate = verifyEmailTemplate;
        return this;
    }
}