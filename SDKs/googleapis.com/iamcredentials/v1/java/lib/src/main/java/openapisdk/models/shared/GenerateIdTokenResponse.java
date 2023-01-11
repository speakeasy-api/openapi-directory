package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GenerateIdTokenResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("token")
    public String token;
    public GenerateIdTokenResponse withToken(String token) {
        this.token = token;
        return this;
    }
}