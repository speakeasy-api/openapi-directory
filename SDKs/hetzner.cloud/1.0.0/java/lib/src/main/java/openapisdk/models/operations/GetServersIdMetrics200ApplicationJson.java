package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetServersIdMetrics200ApplicationJson {
    @JsonProperty("metrics")
    public GetServersIdMetrics200ApplicationJsonMetrics metrics;
    public GetServersIdMetrics200ApplicationJson withMetrics(GetServersIdMetrics200ApplicationJsonMetrics metrics) {
        this.metrics = metrics;
        return this;
    }
}