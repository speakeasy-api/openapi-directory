package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MetricValueSet
 * Represents a set of metric values in the same metric. Each metric value in the set should have a unique combination of start time, end time, and label values.
**/
public class MetricValueSet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metricName")
    public String metricName;
    public MetricValueSet withMetricName(String metricName) {
        this.metricName = metricName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metricValues")
    public MetricValue[] metricValues;
    public MetricValueSet withMetricValues(MetricValue[] metricValues) {
        this.metricValues = metricValues;
        return this;
    }
}