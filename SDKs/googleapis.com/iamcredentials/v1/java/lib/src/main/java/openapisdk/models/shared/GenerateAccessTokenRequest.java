package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GenerateAccessTokenRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("delegates")
    public String[] delegates;
    public GenerateAccessTokenRequest withDelegates(String[] delegates) {
        this.delegates = delegates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lifetime")
    public String lifetime;
    public GenerateAccessTokenRequest withLifetime(String lifetime) {
        this.lifetime = lifetime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scope")
    public String[] scope;
    public GenerateAccessTokenRequest withScope(String[] scope) {
        this.scope = scope;
        return this;
    }
}