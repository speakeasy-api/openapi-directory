package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IdentityAwareProxyInput
 * Identity-Aware Proxy
**/
public class IdentityAwareProxyInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public IdentityAwareProxyInput withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oauth2ClientId")
    public String oauth2ClientId;
    public IdentityAwareProxyInput withOauth2ClientId(String oauth2ClientId) {
        this.oauth2ClientId = oauth2ClientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oauth2ClientSecret")
    public String oauth2ClientSecret;
    public IdentityAwareProxyInput withOauth2ClientSecret(String oauth2ClientSecret) {
        this.oauth2ClientSecret = oauth2ClientSecret;
        return this;
    }
}