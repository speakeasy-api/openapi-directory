package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetRuleCategoryDetails200ApplicationJsonData {
    @JsonProperty("rulesCategories")
    public openapisdk.models.shared.RuleCategory[] rulesCategories;
    public GetRuleCategoryDetails200ApplicationJsonData withRulesCategories(openapisdk.models.shared.RuleCategory[] rulesCategories) {
        this.rulesCategories = rulesCategories;
        return this;
    }
}