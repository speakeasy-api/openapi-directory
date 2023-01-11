package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DimensionFilterClause
 * A group of dimension filters. Set the operator value to specify how the filters are logically combined.
**/
public class DimensionFilterClause {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filters")
    public DimensionFilter[] filters;
    public DimensionFilterClause withFilters(DimensionFilter[] filters) {
        this.filters = filters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operator")
    public DimensionFilterClauseOperatorEnum operator;
    public DimensionFilterClause withOperator(DimensionFilterClauseOperatorEnum operator) {
        this.operator = operator;
        return this;
    }
}