package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeries
 * A time series representing conversations over time.
**/
public class GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeries {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("intervalDuration")
    public String intervalDuration;
    public GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeries withIntervalDuration(String intervalDuration) {
        this.intervalDuration = intervalDuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("points")
    public GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeriesInterval[] points;
    public GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeries withPoints(GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeriesInterval[] points) {
        this.points = points;
        return this;
    }
}