package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateDimensionGroupRequest
 * Updates the state of the specified group.
**/
public class UpdateDimensionGroupRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensionGroup")
    public DimensionGroup dimensionGroup;
    public UpdateDimensionGroupRequest withDimensionGroup(DimensionGroup dimensionGroup) {
        this.dimensionGroup = dimensionGroup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fields")
    public String fields;
    public UpdateDimensionGroupRequest withFields(String fields) {
        this.fields = fields;
        return this;
    }
}