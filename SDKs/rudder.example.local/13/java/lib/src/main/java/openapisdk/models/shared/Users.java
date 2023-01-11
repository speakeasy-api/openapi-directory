package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Users {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isPreHahed")
    public Boolean isPreHahed;
    public Users withIsPreHahed(Boolean isPreHahed) {
        this.isPreHahed = isPreHahed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
    public String password;
    public Users withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("role")
    public String[] role;
    public Users withRole(String[] role) {
        this.role = role;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("username")
    public String username;
    public Users withUsername(String username) {
        this.username = username;
        return this;
    }
}