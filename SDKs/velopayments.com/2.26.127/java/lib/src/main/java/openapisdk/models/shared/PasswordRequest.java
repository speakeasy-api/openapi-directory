package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PasswordRequest {
    @JsonProperty("password")
    public String password;
    public PasswordRequest withPassword(String password) {
        this.password = password;
        return this;
    }
}