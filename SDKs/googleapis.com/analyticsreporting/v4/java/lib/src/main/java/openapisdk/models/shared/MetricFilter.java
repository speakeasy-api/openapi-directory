package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MetricFilter
 * MetricFilter specifies the filter on a metric.
**/
public class MetricFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comparisonValue")
    public String comparisonValue;
    public MetricFilter withComparisonValue(String comparisonValue) {
        this.comparisonValue = comparisonValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metricName")
    public String metricName;
    public MetricFilter withMetricName(String metricName) {
        this.metricName = metricName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("not")
    public Boolean not;
    public MetricFilter withNot(Boolean not) {
        this.not = not;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operator")
    public MetricFilterOperatorEnum operator;
    public MetricFilter withOperator(MetricFilterOperatorEnum operator) {
        this.operator = operator;
        return this;
    }
}