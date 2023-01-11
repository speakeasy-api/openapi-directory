package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AddDimensionGroupResponse
 * The result of adding a group.
**/
public class AddDimensionGroupResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensionGroups")
    public DimensionGroup[] dimensionGroups;
    public AddDimensionGroupResponse withDimensionGroups(DimensionGroup[] dimensionGroups) {
        this.dimensionGroups = dimensionGroups;
        return this;
    }
}