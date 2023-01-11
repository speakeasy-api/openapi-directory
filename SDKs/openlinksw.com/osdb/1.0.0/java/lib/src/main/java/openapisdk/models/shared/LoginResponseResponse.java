package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class LoginResponseResponse {
    @JsonProperty("user")
    public String user;
    public LoginResponseResponse withUser(String user) {
        this.user = user;
        return this;
    }
}