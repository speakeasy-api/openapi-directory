package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetPlacementGroupsIdPlacementGroupResponse {
    @JsonProperty("placement_group")
    public GetPlacementGroupsIdPlacementGroupResponsePlacementGroup placementGroup;
    public GetPlacementGroupsIdPlacementGroupResponse withPlacementGroup(GetPlacementGroupsIdPlacementGroupResponsePlacementGroup placementGroup) {
        this.placementGroup = placementGroup;
        return this;
    }
}