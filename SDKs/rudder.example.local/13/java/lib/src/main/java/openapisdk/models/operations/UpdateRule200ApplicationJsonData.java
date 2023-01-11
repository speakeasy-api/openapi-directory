package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateRule200ApplicationJsonData {
    @JsonProperty("rules")
    public openapisdk.models.shared.RuleWithCategory[] rules;
    public UpdateRule200ApplicationJsonData withRules(openapisdk.models.shared.RuleWithCategory[] rules) {
        this.rules = rules;
        return this;
    }
}