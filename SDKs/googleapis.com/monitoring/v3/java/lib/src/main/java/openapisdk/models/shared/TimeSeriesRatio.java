package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TimeSeriesRatio
 * A TimeSeriesRatio specifies two TimeSeries to use for computing the good_service / total_service ratio. The specified TimeSeries must have ValueType = DOUBLE or ValueType = INT64 and must have MetricKind = DELTA or MetricKind = CUMULATIVE. The TimeSeriesRatio must specify exactly two of good, bad, and total, and the relationship good_service + bad_service = total_service will be assumed.
**/
public class TimeSeriesRatio {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("badServiceFilter")
    public String badServiceFilter;
    public TimeSeriesRatio withBadServiceFilter(String badServiceFilter) {
        this.badServiceFilter = badServiceFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("goodServiceFilter")
    public String goodServiceFilter;
    public TimeSeriesRatio withGoodServiceFilter(String goodServiceFilter) {
        this.goodServiceFilter = goodServiceFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalServiceFilter")
    public String totalServiceFilter;
    public TimeSeriesRatio withTotalServiceFilter(String totalServiceFilter) {
        this.totalServiceFilter = totalServiceFilter;
        return this;
    }
}