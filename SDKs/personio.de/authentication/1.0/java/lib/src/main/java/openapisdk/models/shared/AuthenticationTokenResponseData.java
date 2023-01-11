package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AuthenticationTokenResponseData {
    @JsonProperty("token")
    public String token;
    public AuthenticationTokenResponseData withToken(String token) {
        this.token = token;
        return this;
    }
}