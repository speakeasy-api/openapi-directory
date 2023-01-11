package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * KeyValueTargetingExpression
 * Key Value Targeting Expression.
**/
public class KeyValueTargetingExpression {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expression")
    public String expression;
    public KeyValueTargetingExpression withExpression(String expression) {
        this.expression = expression;
        return this;
    }
}