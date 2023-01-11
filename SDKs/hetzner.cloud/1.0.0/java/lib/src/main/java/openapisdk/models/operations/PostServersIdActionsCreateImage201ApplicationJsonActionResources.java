package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostServersIdActionsCreateImage201ApplicationJsonActionResources {
    @JsonProperty("id")
    public Long id;
    public PostServersIdActionsCreateImage201ApplicationJsonActionResources withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public PostServersIdActionsCreateImage201ApplicationJsonActionResources withType(String type) {
        this.type = type;
        return this;
    }
}