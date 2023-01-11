package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InsertDimensionRequest
 * Inserts rows or columns in a sheet at a particular index.
**/
public class InsertDimensionRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inheritFromBefore")
    public Boolean inheritFromBefore;
    public InsertDimensionRequest withInheritFromBefore(Boolean inheritFromBefore) {
        this.inheritFromBefore = inheritFromBefore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("range")
    public DimensionRange range;
    public InsertDimensionRequest withRange(DimensionRange range) {
        this.range = range;
        return this;
    }
}