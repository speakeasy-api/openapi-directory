package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LocalPostMetrics
 * All the metrics requested for a Local Post.
**/
public class LocalPostMetrics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("localPostName")
    public String localPostName;
    public LocalPostMetrics withLocalPostName(String localPostName) {
        this.localPostName = localPostName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metricValues")
    public MetricValue[] metricValues;
    public LocalPostMetrics withMetricValues(MetricValue[] metricValues) {
        this.metricValues = metricValues;
        return this;
    }
}