package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NetworkReportSpecSortCondition
 * Sorting direction to be applied on a dimension or a metric.
**/
public class NetworkReportSpecSortCondition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimension")
    public NetworkReportSpecSortConditionDimensionEnum dimension;
    public NetworkReportSpecSortCondition withDimension(NetworkReportSpecSortConditionDimensionEnum dimension) {
        this.dimension = dimension;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metric")
    public NetworkReportSpecSortConditionMetricEnum metric;
    public NetworkReportSpecSortCondition withMetric(NetworkReportSpecSortConditionMetricEnum metric) {
        this.metric = metric;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order")
    public NetworkReportSpecSortConditionOrderEnum order;
    public NetworkReportSpecSortCondition withOrder(NetworkReportSpecSortConditionOrderEnum order) {
        this.order = order;
        return this;
    }
}