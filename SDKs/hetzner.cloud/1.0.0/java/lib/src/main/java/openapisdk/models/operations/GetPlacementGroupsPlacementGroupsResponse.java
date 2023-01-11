package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetPlacementGroupsPlacementGroupsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public GetPlacementGroupsPlacementGroupsResponseMeta meta;
    public GetPlacementGroupsPlacementGroupsResponse withMeta(GetPlacementGroupsPlacementGroupsResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonProperty("placement_groups")
    public GetPlacementGroupsPlacementGroupsResponsePlacementGroup[] placementGroups;
    public GetPlacementGroupsPlacementGroupsResponse withPlacementGroups(GetPlacementGroupsPlacementGroupsResponsePlacementGroup[] placementGroups) {
        this.placementGroups = placementGroups;
        return this;
    }
}