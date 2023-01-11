package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomAccount
 * Describes authentication configuration that uses a custom account.
**/
public class CustomAccount {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loginUrl")
    public String loginUrl;
    public CustomAccount withLoginUrl(String loginUrl) {
        this.loginUrl = loginUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
    public String password;
    public CustomAccount withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("username")
    public String username;
    public CustomAccount withUsername(String username) {
        this.username = username;
        return this;
    }
}