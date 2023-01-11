package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteUser200ApplicationJsonDataDeletedUser {
    @JsonProperty("username")
    public String username;
    public DeleteUser200ApplicationJsonDataDeletedUser withUsername(String username) {
        this.username = username;
        return this;
    }
}