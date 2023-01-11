package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateConditionalFormatRuleResponse
 * The result of updating a conditional format rule.
**/
public class UpdateConditionalFormatRuleResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("newIndex")
    public Integer newIndex;
    public UpdateConditionalFormatRuleResponse withNewIndex(Integer newIndex) {
        this.newIndex = newIndex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("newRule")
    public ConditionalFormatRule newRule;
    public UpdateConditionalFormatRuleResponse withNewRule(ConditionalFormatRule newRule) {
        this.newRule = newRule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oldIndex")
    public Integer oldIndex;
    public UpdateConditionalFormatRuleResponse withOldIndex(Integer oldIndex) {
        this.oldIndex = oldIndex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oldRule")
    public ConditionalFormatRule oldRule;
    public UpdateConditionalFormatRuleResponse withOldRule(ConditionalFormatRule oldRule) {
        this.oldRule = oldRule;
        return this;
    }
}