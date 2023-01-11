package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetServersIdMetrics200ApplicationJsonMetrics {
    @JsonProperty("end")
    public String end;
    public GetServersIdMetrics200ApplicationJsonMetrics withEnd(String end) {
        this.end = end;
        return this;
    }
    @JsonProperty("start")
    public String start;
    public GetServersIdMetrics200ApplicationJsonMetrics withStart(String start) {
        this.start = start;
        return this;
    }
    @JsonProperty("step")
    public Double step;
    public GetServersIdMetrics200ApplicationJsonMetrics withStep(Double step) {
        this.step = step;
        return this;
    }
    @JsonProperty("time_series")
    public java.util.Map<String, GetServersIdMetrics200ApplicationJsonMetricsTimeSeries> timeSeries;
    public GetServersIdMetrics200ApplicationJsonMetrics withTimeSeries(java.util.Map<String, GetServersIdMetrics200ApplicationJsonMetricsTimeSeries> timeSeries) {
        this.timeSeries = timeSeries;
        return this;
    }
}