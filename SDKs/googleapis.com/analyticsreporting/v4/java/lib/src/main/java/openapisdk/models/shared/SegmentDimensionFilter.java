package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SegmentDimensionFilter
 * Dimension filter specifies the filtering options on a dimension.
**/
public class SegmentDimensionFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("caseSensitive")
    public Boolean caseSensitive;
    public SegmentDimensionFilter withCaseSensitive(Boolean caseSensitive) {
        this.caseSensitive = caseSensitive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensionName")
    public String dimensionName;
    public SegmentDimensionFilter withDimensionName(String dimensionName) {
        this.dimensionName = dimensionName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expressions")
    public String[] expressions;
    public SegmentDimensionFilter withExpressions(String[] expressions) {
        this.expressions = expressions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxComparisonValue")
    public String maxComparisonValue;
    public SegmentDimensionFilter withMaxComparisonValue(String maxComparisonValue) {
        this.maxComparisonValue = maxComparisonValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minComparisonValue")
    public String minComparisonValue;
    public SegmentDimensionFilter withMinComparisonValue(String minComparisonValue) {
        this.minComparisonValue = minComparisonValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operator")
    public SegmentDimensionFilterOperatorEnum operator;
    public SegmentDimensionFilter withOperator(SegmentDimensionFilterOperatorEnum operator) {
        this.operator = operator;
        return this;
    }
}