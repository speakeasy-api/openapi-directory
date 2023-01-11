package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PickTimeSeriesFilter
 * Describes a ranking-based time series filter. Each input time series is ranked with an aligner. The filter will allow up to num_time_series time series to pass through it, selecting them based on the relative ranking.For example, if ranking_method is METHOD_MEAN,direction is BOTTOM, and num_time_series is 3, then the 3 times series with the lowest mean values will pass through the filter.
**/
public class PickTimeSeriesFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("direction")
    public PickTimeSeriesFilterDirectionEnum direction;
    public PickTimeSeriesFilter withDirection(PickTimeSeriesFilterDirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numTimeSeries")
    public Integer numTimeSeries;
    public PickTimeSeriesFilter withNumTimeSeries(Integer numTimeSeries) {
        this.numTimeSeries = numTimeSeries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rankingMethod")
    public PickTimeSeriesFilterRankingMethodEnum rankingMethod;
    public PickTimeSeriesFilter withRankingMethod(PickTimeSeriesFilterRankingMethodEnum rankingMethod) {
        this.rankingMethod = rankingMethod;
        return this;
    }
}