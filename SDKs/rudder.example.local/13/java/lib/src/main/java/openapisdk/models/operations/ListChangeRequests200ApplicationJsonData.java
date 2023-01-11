package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ListChangeRequests200ApplicationJsonData {
    @JsonProperty("rules")
    public openapisdk.models.shared.ChangeRequest[] rules;
    public ListChangeRequests200ApplicationJsonData withRules(openapisdk.models.shared.ChangeRequest[] rules) {
        this.rules = rules;
        return this;
    }
}