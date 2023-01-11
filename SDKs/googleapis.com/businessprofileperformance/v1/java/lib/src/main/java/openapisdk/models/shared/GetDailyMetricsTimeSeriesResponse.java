package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetDailyMetricsTimeSeriesResponse
 * Represents the response for GetDailyMetricsTimeSeries.
**/
public class GetDailyMetricsTimeSeriesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeSeries")
    public TimeSeries timeSeries;
    public GetDailyMetricsTimeSeriesResponse withTimeSeries(TimeSeries timeSeries) {
        this.timeSeries = timeSeries;
        return this;
    }
}