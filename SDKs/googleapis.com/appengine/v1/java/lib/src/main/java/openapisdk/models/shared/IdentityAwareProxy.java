package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IdentityAwareProxy
 * Identity-Aware Proxy
**/
public class IdentityAwareProxy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public IdentityAwareProxy withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oauth2ClientId")
    public String oauth2ClientId;
    public IdentityAwareProxy withOauth2ClientId(String oauth2ClientId) {
        this.oauth2ClientId = oauth2ClientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oauth2ClientSecret")
    public String oauth2ClientSecret;
    public IdentityAwareProxy withOauth2ClientSecret(String oauth2ClientSecret) {
        this.oauth2ClientSecret = oauth2ClientSecret;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oauth2ClientSecretSha256")
    public String oauth2ClientSecretSha256;
    public IdentityAwareProxy withOauth2ClientSecretSha256(String oauth2ClientSecretSha256) {
        this.oauth2ClientSecretSha256 = oauth2ClientSecretSha256;
        return this;
    }
}