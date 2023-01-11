package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AuthToken {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authToken")
    public String authToken;
    public AuthToken withAuthToken(String authToken) {
        this.authToken = authToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public AuthToken withType(String type) {
        this.type = type;
        return this;
    }
}