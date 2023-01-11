package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DoubleMatcher
 * Specifies the way to match a double value.
**/
public class DoubleMatcher {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exact")
    public Double exact;
    public DoubleMatcher withExact(Double exact) {
        this.exact = exact;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("range")
    public DoubleRange range;
    public DoubleMatcher withRange(DoubleRange range) {
        this.range = range;
        return this;
    }
}