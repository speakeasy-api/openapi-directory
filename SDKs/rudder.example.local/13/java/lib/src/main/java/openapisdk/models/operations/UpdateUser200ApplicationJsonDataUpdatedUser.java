package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateUser200ApplicationJsonDataUpdatedUser {
    @JsonProperty("password")
    public String password;
    public UpdateUser200ApplicationJsonDataUpdatedUser withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonProperty("role")
    public String[] role;
    public UpdateUser200ApplicationJsonDataUpdatedUser withRole(String[] role) {
        this.role = role;
        return this;
    }
    @JsonProperty("username")
    public String username;
    public UpdateUser200ApplicationJsonDataUpdatedUser withUsername(String username) {
        this.username = username;
        return this;
    }
}