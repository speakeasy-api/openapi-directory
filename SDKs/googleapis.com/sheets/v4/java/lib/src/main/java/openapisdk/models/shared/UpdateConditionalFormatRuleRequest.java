package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateConditionalFormatRuleRequest
 * Updates a conditional format rule at the given index, or moves a conditional format rule to another index.
**/
public class UpdateConditionalFormatRuleRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("index")
    public Integer index;
    public UpdateConditionalFormatRuleRequest withIndex(Integer index) {
        this.index = index;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("newIndex")
    public Integer newIndex;
    public UpdateConditionalFormatRuleRequest withNewIndex(Integer newIndex) {
        this.newIndex = newIndex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rule")
    public ConditionalFormatRule rule;
    public UpdateConditionalFormatRuleRequest withRule(ConditionalFormatRule rule) {
        this.rule = rule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sheetId")
    public Integer sheetId;
    public UpdateConditionalFormatRuleRequest withSheetId(Integer sheetId) {
        this.sheetId = sheetId;
        return this;
    }
}