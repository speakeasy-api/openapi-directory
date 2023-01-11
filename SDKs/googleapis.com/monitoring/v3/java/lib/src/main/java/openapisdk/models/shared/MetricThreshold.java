package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MetricThreshold
 * A condition type that compares a collection of time series against a threshold.
**/
public class MetricThreshold {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aggregations")
    public Aggregation[] aggregations;
    public MetricThreshold withAggregations(Aggregation[] aggregations) {
        this.aggregations = aggregations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comparison")
    public MetricThresholdComparisonEnum comparison;
    public MetricThreshold withComparison(MetricThresholdComparisonEnum comparison) {
        this.comparison = comparison;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("denominatorAggregations")
    public Aggregation[] denominatorAggregations;
    public MetricThreshold withDenominatorAggregations(Aggregation[] denominatorAggregations) {
        this.denominatorAggregations = denominatorAggregations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("denominatorFilter")
    public String denominatorFilter;
    public MetricThreshold withDenominatorFilter(String denominatorFilter) {
        this.denominatorFilter = denominatorFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public String duration;
    public MetricThreshold withDuration(String duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("evaluationMissingData")
    public MetricThresholdEvaluationMissingDataEnum evaluationMissingData;
    public MetricThreshold withEvaluationMissingData(MetricThresholdEvaluationMissingDataEnum evaluationMissingData) {
        this.evaluationMissingData = evaluationMissingData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filter")
    public String filter;
    public MetricThreshold withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("forecastOptions")
    public ForecastOptions forecastOptions;
    public MetricThreshold withForecastOptions(ForecastOptions forecastOptions) {
        this.forecastOptions = forecastOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thresholdValue")
    public Double thresholdValue;
    public MetricThreshold withThresholdValue(Double thresholdValue) {
        this.thresholdValue = thresholdValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trigger")
    public Trigger trigger;
    public MetricThreshold withTrigger(Trigger trigger) {
        this.trigger = trigger;
        return this;
    }
}