package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostServersIdActionsRemoveFromPlacementGroupActionResponseActionResources {
    @JsonProperty("id")
    public Long id;
    public PostServersIdActionsRemoveFromPlacementGroupActionResponseActionResources withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public PostServersIdActionsRemoveFromPlacementGroupActionResponseActionResources withType(String type) {
        this.type = type;
        return this;
    }
}