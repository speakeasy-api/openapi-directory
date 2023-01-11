package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostNetworksIdActionsDeleteRouteActionResponseActionResources {
    @JsonProperty("id")
    public Long id;
    public PostNetworksIdActionsDeleteRouteActionResponseActionResources withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public PostNetworksIdActionsDeleteRouteActionResponseActionResources withType(String type) {
        this.type = type;
        return this;
    }
}