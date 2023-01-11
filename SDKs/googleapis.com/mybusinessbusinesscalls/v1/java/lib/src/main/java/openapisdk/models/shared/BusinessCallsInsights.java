package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BusinessCallsInsights
 * Insights for calls made to a location.
**/
public class BusinessCallsInsights {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aggregateMetrics")
    public AggregateMetrics aggregateMetrics;
    public BusinessCallsInsights withAggregateMetrics(AggregateMetrics aggregateMetrics) {
        this.aggregateMetrics = aggregateMetrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metricType")
    public BusinessCallsInsightsMetricTypeEnum metricType;
    public BusinessCallsInsights withMetricType(BusinessCallsInsightsMetricTypeEnum metricType) {
        this.metricType = metricType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public BusinessCallsInsights withName(String name) {
        this.name = name;
        return this;
    }
}