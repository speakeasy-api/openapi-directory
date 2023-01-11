package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IdentityServiceAzureAdConfig
 * Configuration for the AzureAD Auth flow.
**/
public class IdentityServiceAzureAdConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientId")
    public String clientId;
    public IdentityServiceAzureAdConfig withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientSecret")
    public String clientSecret;
    public IdentityServiceAzureAdConfig withClientSecret(String clientSecret) {
        this.clientSecret = clientSecret;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encryptedClientSecret")
    public String encryptedClientSecret;
    public IdentityServiceAzureAdConfig withEncryptedClientSecret(String encryptedClientSecret) {
        this.encryptedClientSecret = encryptedClientSecret;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kubectlRedirectUri")
    public String kubectlRedirectUri;
    public IdentityServiceAzureAdConfig withKubectlRedirectUri(String kubectlRedirectUri) {
        this.kubectlRedirectUri = kubectlRedirectUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tenant")
    public String tenant;
    public IdentityServiceAzureAdConfig withTenant(String tenant) {
        this.tenant = tenant;
        return this;
    }
}