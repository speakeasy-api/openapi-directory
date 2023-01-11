package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * InMemoryUser
 * A user
**/
public class InMemoryUser {
    @JsonProperty("email")
    public String email;
    public InMemoryUser withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonProperty("metadata")
    public java.util.Map<String, String> metadata;
    public InMemoryUser withMetadata(java.util.Map<String, String> metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public InMemoryUser withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("password")
    public String password;
    public InMemoryUser withPassword(String password) {
        this.password = password;
        return this;
    }
}