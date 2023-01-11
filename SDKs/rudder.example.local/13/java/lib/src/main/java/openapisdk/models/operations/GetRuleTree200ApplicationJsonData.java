package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetRuleTree200ApplicationJsonData {
    @JsonProperty("ruleCategories")
    public java.util.Map<String, Object> ruleCategories;
    public GetRuleTree200ApplicationJsonData withRuleCategories(java.util.Map<String, Object> ruleCategories) {
        this.ruleCategories = ruleCategories;
        return this;
    }
}