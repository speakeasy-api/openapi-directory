package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostServersIdActionsChangeTypeActionResponseActionResources {
    @JsonProperty("id")
    public Long id;
    public PostServersIdActionsChangeTypeActionResponseActionResources withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public PostServersIdActionsChangeTypeActionResponseActionResources withType(String type) {
        this.type = type;
        return this;
    }
}