package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AddVideoCreditRequestBody {
    @JsonProperty("email")
    public String email;
    public AddVideoCreditRequestBody withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public AddVideoCreditRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("role")
    public String role;
    public AddVideoCreditRequestBody withRole(String role) {
        this.role = role;
        return this;
    }
    @JsonProperty("user_uri")
    public String userUri;
    public AddVideoCreditRequestBody withUserUri(String userUri) {
        this.userUri = userUri;
        return this;
    }
}