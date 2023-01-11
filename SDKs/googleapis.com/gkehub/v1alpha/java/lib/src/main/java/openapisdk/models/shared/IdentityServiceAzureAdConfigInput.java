package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IdentityServiceAzureAdConfigInput
 * Configuration for the AzureAD Auth flow.
**/
public class IdentityServiceAzureAdConfigInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientId")
    public String clientId;
    public IdentityServiceAzureAdConfigInput withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientSecret")
    public String clientSecret;
    public IdentityServiceAzureAdConfigInput withClientSecret(String clientSecret) {
        this.clientSecret = clientSecret;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kubectlRedirectUri")
    public String kubectlRedirectUri;
    public IdentityServiceAzureAdConfigInput withKubectlRedirectUri(String kubectlRedirectUri) {
        this.kubectlRedirectUri = kubectlRedirectUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tenant")
    public String tenant;
    public IdentityServiceAzureAdConfigInput withTenant(String tenant) {
        this.tenant = tenant;
        return this;
    }
}