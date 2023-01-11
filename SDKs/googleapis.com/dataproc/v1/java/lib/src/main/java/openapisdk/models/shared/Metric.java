package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Metric
 * A Dataproc OSS metric.
**/
public class Metric {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metricOverrides")
    public String[] metricOverrides;
    public Metric withMetricOverrides(String[] metricOverrides) {
        this.metricOverrides = metricOverrides;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metricSource")
    public MetricMetricSourceEnum metricSource;
    public Metric withMetricSource(MetricMetricSourceEnum metricSource) {
        this.metricSource = metricSource;
        return this;
    }
}