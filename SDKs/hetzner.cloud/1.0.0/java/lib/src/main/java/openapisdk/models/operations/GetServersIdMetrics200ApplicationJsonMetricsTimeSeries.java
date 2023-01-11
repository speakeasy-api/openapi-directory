package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetServersIdMetrics200ApplicationJsonMetricsTimeSeries {
    @JsonProperty("values")
    public Object[][] values;
    public GetServersIdMetrics200ApplicationJsonMetricsTimeSeries withValues(Object[][] values) {
        this.values = values;
        return this;
    }
}