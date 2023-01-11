package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IdpConfig
 * Template for a single idp configuration.
**/
public class IdpConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientId")
    public String clientId;
    public IdpConfig withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public IdpConfig withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("experimentPercent")
    public Integer experimentPercent;
    public IdpConfig withExperimentPercent(Integer experimentPercent) {
        this.experimentPercent = experimentPercent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("provider")
    public String provider;
    public IdpConfig withProvider(String provider) {
        this.provider = provider;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public IdpConfig withSecret(String secret) {
        this.secret = secret;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("whitelistedAudiences")
    public String[] whitelistedAudiences;
    public IdpConfig withWhitelistedAudiences(String[] whitelistedAudiences) {
        this.whitelistedAudiences = whitelistedAudiences;
        return this;
    }
}