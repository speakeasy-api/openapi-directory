package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IdentityServiceAuthMethod
 * Configuration of an auth method for a member/cluster. Only one authentication method (e.g., OIDC and LDAP) can be set per AuthMethod.
**/
public class IdentityServiceAuthMethod {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("azureadConfig")
    public IdentityServiceAzureAdConfig azureadConfig;
    public IdentityServiceAuthMethod withAzureadConfig(IdentityServiceAzureAdConfig azureadConfig) {
        this.azureadConfig = azureadConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("googleConfig")
    public IdentityServiceGoogleConfig googleConfig;
    public IdentityServiceAuthMethod withGoogleConfig(IdentityServiceGoogleConfig googleConfig) {
        this.googleConfig = googleConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public IdentityServiceAuthMethod withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oidcConfig")
    public IdentityServiceOidcConfig oidcConfig;
    public IdentityServiceAuthMethod withOidcConfig(IdentityServiceOidcConfig oidcConfig) {
        this.oidcConfig = oidcConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("proxy")
    public String proxy;
    public IdentityServiceAuthMethod withProxy(String proxy) {
        this.proxy = proxy;
        return this;
    }
}