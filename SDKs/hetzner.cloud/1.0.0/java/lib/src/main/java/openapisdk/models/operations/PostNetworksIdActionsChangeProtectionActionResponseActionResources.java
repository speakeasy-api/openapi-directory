package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostNetworksIdActionsChangeProtectionActionResponseActionResources {
    @JsonProperty("id")
    public Long id;
    public PostNetworksIdActionsChangeProtectionActionResponseActionResources withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public PostNetworksIdActionsChangeProtectionActionResponseActionResources withType(String type) {
        this.type = type;
        return this;
    }
}