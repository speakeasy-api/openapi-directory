package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetRuleCompliance200ApplicationJsonData {
    @JsonProperty("rules")
    public GetRuleCompliance200ApplicationJsonDataRules[] rules;
    public GetRuleCompliance200ApplicationJsonData withRules(GetRuleCompliance200ApplicationJsonDataRules[] rules) {
        this.rules = rules;
        return this;
    }
}