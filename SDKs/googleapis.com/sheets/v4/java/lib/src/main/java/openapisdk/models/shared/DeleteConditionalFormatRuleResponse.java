package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeleteConditionalFormatRuleResponse
 * The result of deleting a conditional format rule.
**/
public class DeleteConditionalFormatRuleResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rule")
    public ConditionalFormatRule rule;
    public DeleteConditionalFormatRuleResponse withRule(ConditionalFormatRule rule) {
        this.rule = rule;
        return this;
    }
}