package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteServersId200ApplicationJsonActionResources {
    @JsonProperty("id")
    public Long id;
    public DeleteServersId200ApplicationJsonActionResources withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public DeleteServersId200ApplicationJsonActionResources withType(String type) {
        this.type = type;
        return this;
    }
}