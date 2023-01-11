package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MoveDimensionRequest
 * Moves one or more rows or columns.
**/
public class MoveDimensionRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinationIndex")
    public Integer destinationIndex;
    public MoveDimensionRequest withDestinationIndex(Integer destinationIndex) {
        this.destinationIndex = destinationIndex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public DimensionRange source;
    public MoveDimensionRequest withSource(DimensionRange source) {
        this.source = source;
        return this;
    }
}