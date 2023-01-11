package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MetricFilterClause
 * Represents a group of metric filters. Set the operator value to specify how the filters are logically combined.
**/
public class MetricFilterClause {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filters")
    public MetricFilter[] filters;
    public MetricFilterClause withFilters(MetricFilter[] filters) {
        this.filters = filters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operator")
    public MetricFilterClauseOperatorEnum operator;
    public MetricFilterClause withOperator(MetricFilterClauseOperatorEnum operator) {
        this.operator = operator;
        return this;
    }
}