package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostServersIdActionsRebuild201ApplicationJsonActionResources {
    @JsonProperty("id")
    public Long id;
    public PostServersIdActionsRebuild201ApplicationJsonActionResources withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public PostServersIdActionsRebuild201ApplicationJsonActionResources withType(String type) {
        this.type = type;
        return this;
    }
}