package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateChangeRequest200ApplicationJsonData {
    @JsonProperty("rules")
    public openapisdk.models.shared.ChangeRequest[] rules;
    public UpdateChangeRequest200ApplicationJsonData withRules(openapisdk.models.shared.ChangeRequest[] rules) {
        this.rules = rules;
        return this;
    }
}