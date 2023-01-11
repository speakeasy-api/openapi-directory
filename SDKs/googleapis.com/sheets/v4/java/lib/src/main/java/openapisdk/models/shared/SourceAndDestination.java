package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SourceAndDestination
 * A combination of a source range and how to extend that source.
**/
public class SourceAndDestination {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimension")
    public SourceAndDestinationDimensionEnum dimension;
    public SourceAndDestination withDimension(SourceAndDestinationDimensionEnum dimension) {
        this.dimension = dimension;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fillLength")
    public Integer fillLength;
    public SourceAndDestination withFillLength(Integer fillLength) {
        this.fillLength = fillLength;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public GridRange source;
    public SourceAndDestination withSource(GridRange source) {
        this.source = source;
        return this;
    }
}