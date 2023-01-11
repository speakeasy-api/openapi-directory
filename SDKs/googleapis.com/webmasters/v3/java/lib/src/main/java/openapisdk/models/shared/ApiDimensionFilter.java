package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ApiDimensionFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimension")
    public String dimension;
    public ApiDimensionFilter withDimension(String dimension) {
        this.dimension = dimension;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expression")
    public String expression;
    public ApiDimensionFilter withExpression(String expression) {
        this.expression = expression;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operator")
    public String operator;
    public ApiDimensionFilter withOperator(String operator) {
        this.operator = operator;
        return this;
    }
}