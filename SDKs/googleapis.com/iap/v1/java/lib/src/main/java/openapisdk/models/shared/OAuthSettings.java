package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OAuthSettings
 * Configuration for OAuth login&consent flow behavior as well as for OAuth Credentials.
**/
public class OAuthSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loginHint")
    public String loginHint;
    public OAuthSettings withLoginHint(String loginHint) {
        this.loginHint = loginHint;
        return this;
    }
}