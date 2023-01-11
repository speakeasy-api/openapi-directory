package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BasicAuthentication
 * The authentication parameters to provide to the specified resource or URL that requires a username and password. Currently, only Basic HTTP authentication (https://tools.ietf.org/html/rfc7617) is supported in Uptime checks.
**/
public class BasicAuthentication {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
    public String password;
    public BasicAuthentication withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("username")
    public String username;
    public BasicAuthentication withUsername(String username) {
        this.username = username;
        return this;
    }
}