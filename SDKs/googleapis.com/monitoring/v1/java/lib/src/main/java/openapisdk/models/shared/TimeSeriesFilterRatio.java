package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TimeSeriesFilterRatio
 * A pair of time series filters that define a ratio computation. The output time series is the pair-wise division of each aligned element from the numerator and denominator time series.
**/
public class TimeSeriesFilterRatio {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("denominator")
    public RatioPart denominator;
    public TimeSeriesFilterRatio withDenominator(RatioPart denominator) {
        this.denominator = denominator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numerator")
    public RatioPart numerator;
    public TimeSeriesFilterRatio withNumerator(RatioPart numerator) {
        this.numerator = numerator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pickTimeSeriesFilter")
    public PickTimeSeriesFilter pickTimeSeriesFilter;
    public TimeSeriesFilterRatio withPickTimeSeriesFilter(PickTimeSeriesFilter pickTimeSeriesFilter) {
        this.pickTimeSeriesFilter = pickTimeSeriesFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secondaryAggregation")
    public Aggregation secondaryAggregation;
    public TimeSeriesFilterRatio withSecondaryAggregation(Aggregation secondaryAggregation) {
        this.secondaryAggregation = secondaryAggregation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statisticalTimeSeriesFilter")
    public StatisticalTimeSeriesFilter statisticalTimeSeriesFilter;
    public TimeSeriesFilterRatio withStatisticalTimeSeriesFilter(StatisticalTimeSeriesFilter statisticalTimeSeriesFilter) {
        this.statisticalTimeSeriesFilter = statisticalTimeSeriesFilter;
        return this;
    }
}