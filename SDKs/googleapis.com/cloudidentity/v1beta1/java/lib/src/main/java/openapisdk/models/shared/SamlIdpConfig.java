package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SamlIdpConfig
 * SAML IDP (identity provider) configuration.
**/
public class SamlIdpConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("changePasswordUri")
    public String changePasswordUri;
    public SamlIdpConfig withChangePasswordUri(String changePasswordUri) {
        this.changePasswordUri = changePasswordUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entityId")
    public String entityId;
    public SamlIdpConfig withEntityId(String entityId) {
        this.entityId = entityId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logoutRedirectUri")
    public String logoutRedirectUri;
    public SamlIdpConfig withLogoutRedirectUri(String logoutRedirectUri) {
        this.logoutRedirectUri = logoutRedirectUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("singleSignOnServiceUri")
    public String singleSignOnServiceUri;
    public SamlIdpConfig withSingleSignOnServiceUri(String singleSignOnServiceUri) {
        this.singleSignOnServiceUri = singleSignOnServiceUri;
        return this;
    }
}