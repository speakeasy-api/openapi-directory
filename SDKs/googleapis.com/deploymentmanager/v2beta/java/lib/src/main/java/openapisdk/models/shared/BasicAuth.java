package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BasicAuth
 * Basic Auth used as a credential.
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
    @JsonProperty("user")
    public String user;
    public BasicAuth withUser(String user) {
        this.user = user;
        return this;
    }
}