package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Percentiles
 * Percentiles contains synthetic values of a metric at a given statistical percentile. These are used for estimating a metric's value as experienced by a percentage of users out of the total number of users.
**/
public class Percentiles {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("p75")
    public Object p75;
    public Percentiles withP75(Object p75) {
        this.p75 = p75;
        return this;
    }
}