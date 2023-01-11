package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostPlacementGroupsCreatePlacementGroupResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action")
    public PostPlacementGroupsCreatePlacementGroupResponseNullableAction action;
    public PostPlacementGroupsCreatePlacementGroupResponse withAction(PostPlacementGroupsCreatePlacementGroupResponseNullableAction action) {
        this.action = action;
        return this;
    }
    @JsonProperty("placement_group")
    public PostPlacementGroupsCreatePlacementGroupResponsePlacementGroup placementGroup;
    public PostPlacementGroupsCreatePlacementGroupResponse withPlacementGroup(PostPlacementGroupsCreatePlacementGroupResponsePlacementGroup placementGroup) {
        this.placementGroup = placementGroup;
        return this;
    }
}