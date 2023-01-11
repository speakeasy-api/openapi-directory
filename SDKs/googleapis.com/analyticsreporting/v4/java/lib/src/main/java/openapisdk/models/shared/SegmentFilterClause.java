package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SegmentFilterClause
 * Filter Clause to be used in a segment definition, can be wither a metric or a dimension filter.
**/
public class SegmentFilterClause {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensionFilter")
    public SegmentDimensionFilter dimensionFilter;
    public SegmentFilterClause withDimensionFilter(SegmentDimensionFilter dimensionFilter) {
        this.dimensionFilter = dimensionFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metricFilter")
    public SegmentMetricFilter metricFilter;
    public SegmentFilterClause withMetricFilter(SegmentMetricFilter metricFilter) {
        this.metricFilter = metricFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("not")
    public Boolean not;
    public SegmentFilterClause withNot(Boolean not) {
        this.not = not;
        return this;
    }
}