package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeclineChangeRequest200ApplicationJsonData {
    @JsonProperty("rules")
    public openapisdk.models.shared.ChangeRequest[] rules;
    public DeclineChangeRequest200ApplicationJsonData withRules(openapisdk.models.shared.ChangeRequest[] rules) {
        this.rules = rules;
        return this;
    }
}