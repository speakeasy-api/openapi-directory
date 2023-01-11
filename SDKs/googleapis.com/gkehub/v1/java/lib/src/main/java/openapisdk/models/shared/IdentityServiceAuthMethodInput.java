package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IdentityServiceAuthMethodInput
 * Configuration of an auth method for a member/cluster. Only one authentication method (e.g., OIDC and LDAP) can be set per AuthMethod.
**/
public class IdentityServiceAuthMethodInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("azureadConfig")
    public IdentityServiceAzureAdConfigInput azureadConfig;
    public IdentityServiceAuthMethodInput withAzureadConfig(IdentityServiceAzureAdConfigInput azureadConfig) {
        this.azureadConfig = azureadConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("googleConfig")
    public IdentityServiceGoogleConfig googleConfig;
    public IdentityServiceAuthMethodInput withGoogleConfig(IdentityServiceGoogleConfig googleConfig) {
        this.googleConfig = googleConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public IdentityServiceAuthMethodInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oidcConfig")
    public IdentityServiceOidcConfigInput oidcConfig;
    public IdentityServiceAuthMethodInput withOidcConfig(IdentityServiceOidcConfigInput oidcConfig) {
        this.oidcConfig = oidcConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("proxy")
    public String proxy;
    public IdentityServiceAuthMethodInput withProxy(String proxy) {
        this.proxy = proxy;
        return this;
    }
}