package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BasicAuth
 * Basic authentication credentials
**/
public class BasicAuth {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
    public String password;
    public BasicAuth withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("username")
    public String username;
    public BasicAuth withUsername(String username) {
        this.username = username;
        return this;
    }
}