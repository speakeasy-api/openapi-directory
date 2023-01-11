package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutPlacementGroupsIdPlacementGroupResponse {
    @JsonProperty("placement_group")
    public PutPlacementGroupsIdPlacementGroupResponsePlacementGroup placementGroup;
    public PutPlacementGroupsIdPlacementGroupResponse withPlacementGroup(PutPlacementGroupsIdPlacementGroupResponsePlacementGroup placementGroup) {
        this.placementGroup = placementGroup;
        return this;
    }
}