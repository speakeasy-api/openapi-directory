package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GenerateIdTokenRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audience")
    public String audience;
    public GenerateIdTokenRequest withAudience(String audience) {
        this.audience = audience;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("delegates")
    public String[] delegates;
    public GenerateIdTokenRequest withDelegates(String[] delegates) {
        this.delegates = delegates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeEmail")
    public Boolean includeEmail;
    public GenerateIdTokenRequest withIncludeEmail(Boolean includeEmail) {
        this.includeEmail = includeEmail;
        return this;
    }
}