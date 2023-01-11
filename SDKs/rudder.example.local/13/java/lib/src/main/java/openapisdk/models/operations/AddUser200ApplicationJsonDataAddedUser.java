package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddUser200ApplicationJsonDataAddedUser {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
    public String password;
    public AddUser200ApplicationJsonDataAddedUser withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("role")
    public String[] role;
    public AddUser200ApplicationJsonDataAddedUser withRole(String[] role) {
        this.role = role;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("username")
    public String username;
    public AddUser200ApplicationJsonDataAddedUser withUsername(String username) {
        this.username = username;
        return this;
    }
}