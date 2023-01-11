package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BasicMetricsRequest
 * A request for basic metric insights.
**/
public class BasicMetricsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metricRequests")
    public MetricRequest[] metricRequests;
    public BasicMetricsRequest withMetricRequests(MetricRequest[] metricRequests) {
        this.metricRequests = metricRequests;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeRange")
    public TimeRange timeRange;
    public BasicMetricsRequest withTimeRange(TimeRange timeRange) {
        this.timeRange = timeRange;
        return this;
    }
}