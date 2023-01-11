package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class LogoutResponseResponse {
    @JsonProperty("user")
    public String user;
    public LogoutResponseResponse withUser(String user) {
        this.user = user;
        return this;
    }
}