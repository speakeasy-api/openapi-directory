package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetLoadBalancersIdMetrics200ApplicationJsonMetrics {
    @JsonProperty("end")
    public String end;
    public GetLoadBalancersIdMetrics200ApplicationJsonMetrics withEnd(String end) {
        this.end = end;
        return this;
    }
    @JsonProperty("start")
    public String start;
    public GetLoadBalancersIdMetrics200ApplicationJsonMetrics withStart(String start) {
        this.start = start;
        return this;
    }
    @JsonProperty("step")
    public Double step;
    public GetLoadBalancersIdMetrics200ApplicationJsonMetrics withStep(Double step) {
        this.step = step;
        return this;
    }
    @JsonProperty("time_series")
    public java.util.Map<String, GetLoadBalancersIdMetrics200ApplicationJsonMetricsTimeSeries> timeSeries;
    public GetLoadBalancersIdMetrics200ApplicationJsonMetrics withTimeSeries(java.util.Map<String, GetLoadBalancersIdMetrics200ApplicationJsonMetricsTimeSeries> timeSeries) {
        this.timeSeries = timeSeries;
        return this;
    }
}