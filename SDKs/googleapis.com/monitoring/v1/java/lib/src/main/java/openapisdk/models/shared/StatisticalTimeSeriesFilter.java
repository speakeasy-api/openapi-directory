package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StatisticalTimeSeriesFilter
 * A filter that ranks streams based on their statistical relation to other streams in a request. Note: This field is deprecated and completely ignored by the API.
**/
public class StatisticalTimeSeriesFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numTimeSeries")
    public Integer numTimeSeries;
    public StatisticalTimeSeriesFilter withNumTimeSeries(Integer numTimeSeries) {
        this.numTimeSeries = numTimeSeries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rankingMethod")
    public StatisticalTimeSeriesFilterRankingMethodEnum rankingMethod;
    public StatisticalTimeSeriesFilter withRankingMethod(StatisticalTimeSeriesFilterRankingMethodEnum rankingMethod) {
        this.rankingMethod = rankingMethod;
        return this;
    }
}