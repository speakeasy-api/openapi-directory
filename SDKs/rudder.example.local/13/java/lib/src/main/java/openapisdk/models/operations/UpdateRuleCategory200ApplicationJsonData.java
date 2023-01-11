package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateRuleCategory200ApplicationJsonData {
    @JsonProperty("ruleCategories")
    public openapisdk.models.shared.RuleCategory[] ruleCategories;
    public UpdateRuleCategory200ApplicationJsonData withRuleCategories(openapisdk.models.shared.RuleCategory[] ruleCategories) {
        this.ruleCategories = ruleCategories;
        return this;
    }
}