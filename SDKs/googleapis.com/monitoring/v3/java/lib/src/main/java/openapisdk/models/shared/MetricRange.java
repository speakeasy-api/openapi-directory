package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MetricRange
 * A MetricRange is used when each window is good when the value x of a single TimeSeries satisfies range.min <= x <= range.max. The provided TimeSeries must have ValueType = INT64 or ValueType = DOUBLE and MetricKind = GAUGE.
**/
public class MetricRange {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("range")
    public GoogleMonitoringV3Range range;
    public MetricRange withRange(GoogleMonitoringV3Range range) {
        this.range = range;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeSeries")
    public String timeSeries;
    public MetricRange withTimeSeries(String timeSeries) {
        this.timeSeries = timeSeries;
        return this;
    }
}