package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GaugeView
 * A gauge chart shows where the current value sits within a pre-defined range. The upper and lower bounds should define the possible range of values for the scorecard's query (inclusive).
**/
public class GaugeView {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lowerBound")
    public Double lowerBound;
    public GaugeView withLowerBound(Double lowerBound) {
        this.lowerBound = lowerBound;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("upperBound")
    public Double upperBound;
    public GaugeView withUpperBound(Double upperBound) {
        this.upperBound = upperBound;
        return this;
    }
}