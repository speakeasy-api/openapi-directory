package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AddVideoCreditAlt1RequestBody {
    @JsonProperty("email")
    public String email;
    public AddVideoCreditAlt1RequestBody withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public AddVideoCreditAlt1RequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("role")
    public String role;
    public AddVideoCreditAlt1RequestBody withRole(String role) {
        this.role = role;
        return this;
    }
    @JsonProperty("user_uri")
    public String userUri;
    public AddVideoCreditAlt1RequestBody withUserUri(String userUri) {
        this.userUri = userUri;
        return this;
    }
}