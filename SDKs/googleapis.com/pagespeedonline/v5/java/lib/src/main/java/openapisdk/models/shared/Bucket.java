package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Bucket
 * A proportion of data in the total distribution, bucketed by a min/max percentage. Each bucket's range is bounded by min <= x < max, In millisecond.
**/
public class Bucket {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("max")
    public Integer max;
    public Bucket withMax(Integer max) {
        this.max = max;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("min")
    public Integer min;
    public Bucket withMin(Integer min) {
        this.min = min;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("proportion")
    public Double proportion;
    public Bucket withProportion(Double proportion) {
        this.proportion = proportion;
        return this;
    }
}