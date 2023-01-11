package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Auth0Config
 * Configuration for Auth0 domain
**/
public class Auth0Config {
    @JsonProperty("callbackUrl")
    public String callbackUrl;
    public Auth0Config withCallbackUrl(String callbackUrl) {
        this.callbackUrl = callbackUrl;
        return this;
    }
    @JsonProperty("clientId")
    public String clientId;
    public Auth0Config withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonProperty("clientSecret")
    public String clientSecret;
    public Auth0Config withClientSecret(String clientSecret) {
        this.clientSecret = clientSecret;
        return this;
    }
    @JsonProperty("domain")
    public String domain;
    public Auth0Config withDomain(String domain) {
        this.domain = domain;
        return this;
    }
}