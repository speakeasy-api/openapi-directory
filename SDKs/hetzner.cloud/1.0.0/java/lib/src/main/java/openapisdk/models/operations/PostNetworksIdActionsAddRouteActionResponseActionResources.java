package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostNetworksIdActionsAddRouteActionResponseActionResources {
    @JsonProperty("id")
    public Long id;
    public PostNetworksIdActionsAddRouteActionResponseActionResources withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public PostNetworksIdActionsAddRouteActionResponseActionResources withType(String type) {
        this.type = type;
        return this;
    }
}