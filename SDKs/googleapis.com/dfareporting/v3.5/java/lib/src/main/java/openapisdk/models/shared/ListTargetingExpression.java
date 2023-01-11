package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListTargetingExpression
 * Remarketing List Targeting Expression.
**/
public class ListTargetingExpression {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expression")
    public String expression;
    public ListTargetingExpression withExpression(String expression) {
        this.expression = expression;
        return this;
    }
}