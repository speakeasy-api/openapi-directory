package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostPlacementGroupsCreatePlacementGroupResponseNullableActionResources {
    @JsonProperty("id")
    public Long id;
    public PostPlacementGroupsCreatePlacementGroupResponseNullableActionResources withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public PostPlacementGroupsCreatePlacementGroupResponseNullableActionResources withType(String type) {
        this.type = type;
        return this;
    }
}