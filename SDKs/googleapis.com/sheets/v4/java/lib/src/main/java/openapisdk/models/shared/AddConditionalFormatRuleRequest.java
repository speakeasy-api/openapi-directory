package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AddConditionalFormatRuleRequest
 * Adds a new conditional format rule at the given index. All subsequent rules' indexes are incremented.
**/
public class AddConditionalFormatRuleRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("index")
    public Integer index;
    public AddConditionalFormatRuleRequest withIndex(Integer index) {
        this.index = index;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rule")
    public ConditionalFormatRule rule;
    public AddConditionalFormatRuleRequest withRule(ConditionalFormatRule rule) {
        this.rule = rule;
        return this;
    }
}