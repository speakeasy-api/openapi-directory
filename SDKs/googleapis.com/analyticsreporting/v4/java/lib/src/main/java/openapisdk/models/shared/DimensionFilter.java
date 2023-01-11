package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DimensionFilter
 * Dimension filter specifies the filtering options on a dimension.
**/
public class DimensionFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("caseSensitive")
    public Boolean caseSensitive;
    public DimensionFilter withCaseSensitive(Boolean caseSensitive) {
        this.caseSensitive = caseSensitive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensionName")
    public String dimensionName;
    public DimensionFilter withDimensionName(String dimensionName) {
        this.dimensionName = dimensionName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expressions")
    public String[] expressions;
    public DimensionFilter withExpressions(String[] expressions) {
        this.expressions = expressions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("not")
    public Boolean not;
    public DimensionFilter withNot(Boolean not) {
        this.not = not;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operator")
    public DimensionFilterOperatorEnum operator;
    public DimensionFilter withOperator(DimensionFilterOperatorEnum operator) {
        this.operator = operator;
        return this;
    }
}