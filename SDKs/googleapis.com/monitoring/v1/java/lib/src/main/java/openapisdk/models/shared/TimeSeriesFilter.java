package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TimeSeriesFilter
 * A filter that defines a subset of time series data that is displayed in a widget. Time series data is fetched using the ListTimeSeries (https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.timeSeries/list) method.
**/
public class TimeSeriesFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aggregation")
    public Aggregation aggregation;
    public TimeSeriesFilter withAggregation(Aggregation aggregation) {
        this.aggregation = aggregation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filter")
    public String filter;
    public TimeSeriesFilter withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pickTimeSeriesFilter")
    public PickTimeSeriesFilter pickTimeSeriesFilter;
    public TimeSeriesFilter withPickTimeSeriesFilter(PickTimeSeriesFilter pickTimeSeriesFilter) {
        this.pickTimeSeriesFilter = pickTimeSeriesFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secondaryAggregation")
    public Aggregation secondaryAggregation;
    public TimeSeriesFilter withSecondaryAggregation(Aggregation secondaryAggregation) {
        this.secondaryAggregation = secondaryAggregation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statisticalTimeSeriesFilter")
    public StatisticalTimeSeriesFilter statisticalTimeSeriesFilter;
    public TimeSeriesFilter withStatisticalTimeSeriesFilter(StatisticalTimeSeriesFilter statisticalTimeSeriesFilter) {
        this.statisticalTimeSeriesFilter = statisticalTimeSeriesFilter;
        return this;
    }
}