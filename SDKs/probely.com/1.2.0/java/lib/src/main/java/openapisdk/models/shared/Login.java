package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Login {
    @JsonProperty("password")
    public String password;
    public Login withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonProperty("username")
    public String username;
    public Login withUsername(String username) {
        this.username = username;
        return this;
    }
}