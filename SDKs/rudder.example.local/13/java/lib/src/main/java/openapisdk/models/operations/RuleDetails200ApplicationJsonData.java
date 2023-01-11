package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RuleDetails200ApplicationJsonData {
    @JsonProperty("rules")
    public openapisdk.models.shared.Rule[] rules;
    public RuleDetails200ApplicationJsonData withRules(openapisdk.models.shared.Rule[] rules) {
        this.rules = rules;
        return this;
    }
}