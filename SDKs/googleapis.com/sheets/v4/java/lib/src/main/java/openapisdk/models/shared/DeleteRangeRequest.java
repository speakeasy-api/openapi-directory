package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeleteRangeRequest
 * Deletes a range of cells, shifting other cells into the deleted area.
**/
public class DeleteRangeRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("range")
    public GridRange range;
    public DeleteRangeRequest withRange(GridRange range) {
        this.range = range;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shiftDimension")
    public DeleteRangeRequestShiftDimensionEnum shiftDimension;
    public DeleteRangeRequest withShiftDimension(DeleteRangeRequestShiftDimensionEnum shiftDimension) {
        this.shiftDimension = shiftDimension;
        return this;
    }
}