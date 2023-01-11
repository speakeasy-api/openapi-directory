package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostFloatingIps201ApplicationJsonActionResources {
    @JsonProperty("id")
    public Long id;
    public PostFloatingIps201ApplicationJsonActionResources withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public PostFloatingIps201ApplicationJsonActionResources withType(String type) {
        this.type = type;
        return this;
    }
}