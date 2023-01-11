package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UserPassword
 * Parameters to support Username and Password Authentication.
**/
public class UserPassword {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
    public Secret password;
    public UserPassword withPassword(Secret password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("username")
    public String username;
    public UserPassword withUsername(String username) {
        this.username = username;
        return this;
    }
}