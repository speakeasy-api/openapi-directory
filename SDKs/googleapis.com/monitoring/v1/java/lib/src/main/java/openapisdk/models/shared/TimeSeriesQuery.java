package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TimeSeriesQuery
 * TimeSeriesQuery collects the set of supported methods for querying time series data from the Stackdriver metrics API.
**/
public class TimeSeriesQuery {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prometheusQuery")
    public String prometheusQuery;
    public TimeSeriesQuery withPrometheusQuery(String prometheusQuery) {
        this.prometheusQuery = prometheusQuery;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeSeriesFilter")
    public TimeSeriesFilter timeSeriesFilter;
    public TimeSeriesQuery withTimeSeriesFilter(TimeSeriesFilter timeSeriesFilter) {
        this.timeSeriesFilter = timeSeriesFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeSeriesFilterRatio")
    public TimeSeriesFilterRatio timeSeriesFilterRatio;
    public TimeSeriesQuery withTimeSeriesFilterRatio(TimeSeriesFilterRatio timeSeriesFilterRatio) {
        this.timeSeriesFilterRatio = timeSeriesFilterRatio;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeSeriesQueryLanguage")
    public String timeSeriesQueryLanguage;
    public TimeSeriesQuery withTimeSeriesQueryLanguage(String timeSeriesQueryLanguage) {
        this.timeSeriesQueryLanguage = timeSeriesQueryLanguage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unitOverride")
    public String unitOverride;
    public TimeSeriesQuery withUnitOverride(String unitOverride) {
        this.unitOverride = unitOverride;
        return this;
    }
}