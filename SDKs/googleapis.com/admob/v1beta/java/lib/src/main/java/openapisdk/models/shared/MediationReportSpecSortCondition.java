package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MediationReportSpecSortCondition
 * Sorting direction to be applied on a dimension or a metric.
**/
public class MediationReportSpecSortCondition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimension")
    public MediationReportSpecSortConditionDimensionEnum dimension;
    public MediationReportSpecSortCondition withDimension(MediationReportSpecSortConditionDimensionEnum dimension) {
        this.dimension = dimension;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metric")
    public MediationReportSpecSortConditionMetricEnum metric;
    public MediationReportSpecSortCondition withMetric(MediationReportSpecSortConditionMetricEnum metric) {
        this.metric = metric;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order")
    public MediationReportSpecSortConditionOrderEnum order;
    public MediationReportSpecSortCondition withOrder(MediationReportSpecSortConditionOrderEnum order) {
        this.order = order;
        return this;
    }
}