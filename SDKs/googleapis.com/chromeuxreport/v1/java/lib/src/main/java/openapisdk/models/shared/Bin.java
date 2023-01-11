package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Bin
 * A bin is a discrete portion of data spanning from start to end, or if no end is given, then from start to +inf. A bin's start and end values are given in the value type of the metric it represents. For example, "first contentful paint" is measured in milliseconds and exposed as ints, therefore its metric bins will use int32s for its start and end types. However, "cumulative layout shift" is measured in unitless decimals and is exposed as a decimal encoded as a string, therefore its metric bins will use strings for its value type.
**/
public class Bin {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("density")
    public Double density;
    public Bin withDensity(Double density) {
        this.density = density;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end")
    public Object end;
    public Bin withEnd(Object end) {
        this.end = end;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start")
    public Object start;
    public Bin withStart(Object start) {
        this.start = start;
        return this;
    }
}