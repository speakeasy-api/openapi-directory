package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostServersIdActionsAddToPlacementGroupActionResponseActionResources {
    @JsonProperty("id")
    public Long id;
    public PostServersIdActionsAddToPlacementGroupActionResponseActionResources withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public PostServersIdActionsAddToPlacementGroupActionResponseActionResources withType(String type) {
        this.type = type;
        return this;
    }
}