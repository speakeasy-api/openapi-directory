package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AuthorizationCodeLink
 * This configuration captures the details required to render an authorization link for the OAuth Authorization Code Flow.
**/
public class AuthorizationCodeLink {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientId")
    public String clientId;
    public AuthorizationCodeLink withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enablePkce")
    public Boolean enablePkce;
    public AuthorizationCodeLink withEnablePkce(Boolean enablePkce) {
        this.enablePkce = enablePkce;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scopes")
    public String[] scopes;
    public AuthorizationCodeLink withScopes(String[] scopes) {
        this.scopes = scopes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public AuthorizationCodeLink withUri(String uri) {
        this.uri = uri;
        return this;
    }
}