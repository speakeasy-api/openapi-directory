package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * IdentificationTokenResponse
 * The identification token to be passed to the Conversations JS API to identify the visitor
**/
public class IdentificationTokenResponse {
    @JsonProperty("token")
    public String token;
    public IdentificationTokenResponse withToken(String token) {
        this.token = token;
        return this;
    }
}