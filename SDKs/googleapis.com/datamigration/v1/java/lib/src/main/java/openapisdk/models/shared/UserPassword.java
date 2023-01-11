package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UserPassword
 * The username/password for a database user. Used for specifying initial users at cluster creation time.
**/
public class UserPassword {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
    public String password;
    public UserPassword withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("passwordSet")
    public Boolean passwordSet;
    public UserPassword withPasswordSet(Boolean passwordSet) {
        this.passwordSet = passwordSet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user")
    public String user;
    public UserPassword withUser(String user) {
        this.user = user;
        return this;
    }
}