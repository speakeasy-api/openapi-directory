package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Role {
    @JsonProperty("name")
    public String name;
    public Role withName(String name) {
        this.name = name;
        return this;
    }
}