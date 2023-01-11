package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DimensionFilter
 * Represents a dimension filter.
**/
public class DimensionFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensionName")
    public String dimensionName;
    public DimensionFilter withDimensionName(String dimensionName) {
        this.dimensionName = dimensionName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public DimensionFilter withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public DimensionFilter withValue(String value) {
        this.value = value;
        return this;
    }
}