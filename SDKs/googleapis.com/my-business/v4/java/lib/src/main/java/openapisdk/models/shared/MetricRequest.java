package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MetricRequest
 * A request to return values for one metric and the options for how those values should be returned.
**/
public class MetricRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metric")
    public MetricRequestMetricEnum metric;
    public MetricRequest withMetric(MetricRequestMetricEnum metric) {
        this.metric = metric;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("options")
    public MetricRequestOptionsEnum[] options;
    public MetricRequest withOptions(MetricRequestOptionsEnum[] options) {
        this.options = options;
        return this;
    }
}