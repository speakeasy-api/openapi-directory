package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetPlacementGroupsPlacementGroupsResponseMeta {
    @JsonProperty("pagination")
    public GetPlacementGroupsPlacementGroupsResponseMetaPagination pagination;
    public GetPlacementGroupsPlacementGroupsResponseMeta withPagination(GetPlacementGroupsPlacementGroupsResponseMetaPagination pagination) {
        this.pagination = pagination;
        return this;
    }
}