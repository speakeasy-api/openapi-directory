package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteRule200ApplicationJsonData {
    @JsonProperty("rules")
    public openapisdk.models.shared.Rule[] rules;
    public DeleteRule200ApplicationJsonData withRules(openapisdk.models.shared.Rule[] rules) {
        this.rules = rules;
        return this;
    }
}