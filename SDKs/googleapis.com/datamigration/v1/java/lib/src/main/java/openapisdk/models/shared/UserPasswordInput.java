package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UserPasswordInput
 * The username/password for a database user. Used for specifying initial users at cluster creation time.
**/
public class UserPasswordInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
    public String password;
    public UserPasswordInput withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user")
    public String user;
    public UserPasswordInput withUser(String user) {
        this.user = user;
        return this;
    }
}