package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeleteDimensionGroupResponse
 * The result of deleting a group.
**/
public class DeleteDimensionGroupResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensionGroups")
    public DimensionGroup[] dimensionGroups;
    public DeleteDimensionGroupResponse withDimensionGroups(DimensionGroup[] dimensionGroups) {
        this.dimensionGroups = dimensionGroups;
        return this;
    }
}