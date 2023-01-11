package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAccount
 * Describes authentication configuration that uses a Google account.
**/
public class GoogleAccount {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
    public String password;
    public GoogleAccount withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("username")
    public String username;
    public GoogleAccount withUsername(String username) {
        this.username = username;
        return this;
    }
}