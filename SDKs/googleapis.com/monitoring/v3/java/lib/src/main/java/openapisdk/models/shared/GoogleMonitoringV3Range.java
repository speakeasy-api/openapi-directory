package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleMonitoringV3Range
 * Range of numerical values within min and max.
**/
public class GoogleMonitoringV3Range {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("max")
    public Double max;
    public GoogleMonitoringV3Range withMax(Double max) {
        this.max = max;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("min")
    public Double min;
    public GoogleMonitoringV3Range withMin(Double min) {
        this.min = min;
        return this;
    }
}