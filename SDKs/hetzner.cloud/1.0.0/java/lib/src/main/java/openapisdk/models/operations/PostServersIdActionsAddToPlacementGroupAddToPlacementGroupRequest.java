package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostServersIdActionsAddToPlacementGroupAddToPlacementGroupRequest {
    @JsonProperty("placement_group")
    public Long placementGroup;
    public PostServersIdActionsAddToPlacementGroupAddToPlacementGroupRequest withPlacementGroup(Long placementGroup) {
        this.placementGroup = placementGroup;
        return this;
    }
}