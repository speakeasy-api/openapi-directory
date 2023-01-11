package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeleteDimensionGroupRequest
 * Deletes a group over the specified range by decrementing the depth of the dimensions in the range. For example, assume the sheet has a depth-1 group over B:E and a depth-2 group over C:D. Deleting a group over D:E leaves the sheet with a depth-1 group over B:D and a depth-2 group over C:C.
**/
public class DeleteDimensionGroupRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("range")
    public DimensionRange range;
    public DeleteDimensionGroupRequest withRange(DimensionRange range) {
        this.range = range;
        return this;
    }
}