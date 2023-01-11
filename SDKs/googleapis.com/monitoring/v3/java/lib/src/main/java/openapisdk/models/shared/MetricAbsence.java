package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MetricAbsence
 * A condition type that checks that monitored resources are reporting data. The configuration defines a metric and a set of monitored resources. The predicate is considered in violation when a time series for the specified metric of a monitored resource does not include any data in the specified duration.
**/
public class MetricAbsence {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aggregations")
    public Aggregation[] aggregations;
    public MetricAbsence withAggregations(Aggregation[] aggregations) {
        this.aggregations = aggregations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public String duration;
    public MetricAbsence withDuration(String duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filter")
    public String filter;
    public MetricAbsence withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trigger")
    public Trigger trigger;
    public MetricAbsence withTrigger(Trigger trigger) {
        this.trigger = trigger;
        return this;
    }
}