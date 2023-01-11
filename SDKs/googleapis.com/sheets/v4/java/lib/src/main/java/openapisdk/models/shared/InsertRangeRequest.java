package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InsertRangeRequest
 * Inserts cells into a range, shifting the existing cells over or down.
**/
public class InsertRangeRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("range")
    public GridRange range;
    public InsertRangeRequest withRange(GridRange range) {
        this.range = range;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shiftDimension")
    public InsertRangeRequestShiftDimensionEnum shiftDimension;
    public InsertRangeRequest withShiftDimension(InsertRangeRequestShiftDimensionEnum shiftDimension) {
        this.shiftDimension = shiftDimension;
        return this;
    }
}