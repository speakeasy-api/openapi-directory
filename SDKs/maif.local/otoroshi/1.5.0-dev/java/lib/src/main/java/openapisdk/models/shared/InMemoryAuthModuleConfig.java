package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * InMemoryAuthModuleConfig
 * Settings to authenticate users using the in memory user store
**/
public class InMemoryAuthModuleConfig {
    @JsonProperty("desc")
    public String desc;
    public InMemoryAuthModuleConfig withDesc(String desc) {
        this.desc = desc;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public InMemoryAuthModuleConfig withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public InMemoryAuthModuleConfig withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("sessionMaxAge")
    public String sessionMaxAge;
    public InMemoryAuthModuleConfig withSessionMaxAge(String sessionMaxAge) {
        this.sessionMaxAge = sessionMaxAge;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public InMemoryAuthModuleConfig withType(String type) {
        this.type = type;
        return this;
    }
    @JsonProperty("users")
    public InMemoryUser[] users;
    public InMemoryAuthModuleConfig withUsers(InMemoryUser[] users) {
        this.users = users;
        return this;
    }
}