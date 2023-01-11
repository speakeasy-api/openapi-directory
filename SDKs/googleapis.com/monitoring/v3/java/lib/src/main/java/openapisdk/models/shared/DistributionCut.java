package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DistributionCut
 * A DistributionCut defines a TimeSeries and thresholds used for measuring good service and total service. The TimeSeries must have ValueType = DISTRIBUTION and MetricKind = DELTA or MetricKind = CUMULATIVE. The computed good_service will be the estimated count of values in the Distribution that fall within the specified min and max.
**/
public class DistributionCut {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("distributionFilter")
    public String distributionFilter;
    public DistributionCut withDistributionFilter(String distributionFilter) {
        this.distributionFilter = distributionFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("range")
    public GoogleMonitoringV3Range range;
    public DistributionCut withRange(GoogleMonitoringV3Range range) {
        this.range = range;
        return this;
    }
}