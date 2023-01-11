package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListMetricListMetricResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListMetricListMetricResponseMeta meta;
    public ListMetricListMetricResponse withMeta(ListMetricListMetricResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metrics")
    public openapisdk.models.shared.InsightsV1CallMetric[] metrics;
    public ListMetricListMetricResponse withMetrics(openapisdk.models.shared.InsightsV1CallMetric[] metrics) {
        this.metrics = metrics;
        return this;
    }
}