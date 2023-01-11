package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetLoadBalancersIdMetrics200ApplicationJsonMetricsTimeSeries {
    @JsonProperty("values")
    public Object[][] values;
    public GetLoadBalancersIdMetrics200ApplicationJsonMetricsTimeSeries withValues(Object[][] values) {
        this.values = values;
        return this;
    }
}