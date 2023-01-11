package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Range
 * The range of the population values.
**/
public class Range {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("max")
    public Double max;
    public Range withMax(Double max) {
        this.max = max;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("min")
    public Double min;
    public Range withMin(Double min) {
        this.min = min;
        return this;
    }
}