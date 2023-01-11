package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ChangeRequestDetails200ApplicationJsonData {
    @JsonProperty("rules")
    public openapisdk.models.shared.ChangeRequest[] rules;
    public ChangeRequestDetails200ApplicationJsonData withRules(openapisdk.models.shared.ChangeRequest[] rules) {
        this.rules = rules;
        return this;
    }
}