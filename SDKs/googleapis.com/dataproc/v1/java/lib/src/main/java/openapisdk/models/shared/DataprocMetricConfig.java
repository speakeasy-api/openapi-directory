package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DataprocMetricConfig
 * Dataproc metric config.
**/
public class DataprocMetricConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metrics")
    public Metric[] metrics;
    public DataprocMetricConfig withMetrics(Metric[] metrics) {
        this.metrics = metrics;
        return this;
    }
}