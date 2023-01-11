package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SegmentMetricFilter
 * Metric filter to be used in a segment filter clause.
**/
public class SegmentMetricFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comparisonValue")
    public String comparisonValue;
    public SegmentMetricFilter withComparisonValue(String comparisonValue) {
        this.comparisonValue = comparisonValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxComparisonValue")
    public String maxComparisonValue;
    public SegmentMetricFilter withMaxComparisonValue(String maxComparisonValue) {
        this.maxComparisonValue = maxComparisonValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metricName")
    public String metricName;
    public SegmentMetricFilter withMetricName(String metricName) {
        this.metricName = metricName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operator")
    public SegmentMetricFilterOperatorEnum operator;
    public SegmentMetricFilter withOperator(SegmentMetricFilterOperatorEnum operator) {
        this.operator = operator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scope")
    public SegmentMetricFilterScopeEnum scope;
    public SegmentMetricFilter withScope(SegmentMetricFilterScopeEnum scope) {
        this.scope = scope;
        return this;
    }
}