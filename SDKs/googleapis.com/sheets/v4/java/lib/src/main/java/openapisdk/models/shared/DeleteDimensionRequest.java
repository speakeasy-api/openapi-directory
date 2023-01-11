package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeleteDimensionRequest
 * Deletes the dimensions from the sheet.
**/
public class DeleteDimensionRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("range")
    public DimensionRange range;
    public DeleteDimensionRequest withRange(DimensionRange range) {
        this.range = range;
        return this;
    }
}