package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetLoadBalancersIdMetrics200ApplicationJson {
    @JsonProperty("metrics")
    public GetLoadBalancersIdMetrics200ApplicationJsonMetrics metrics;
    public GetLoadBalancersIdMetrics200ApplicationJson withMetrics(GetLoadBalancersIdMetrics200ApplicationJsonMetrics metrics) {
        this.metrics = metrics;
        return this;
    }
}