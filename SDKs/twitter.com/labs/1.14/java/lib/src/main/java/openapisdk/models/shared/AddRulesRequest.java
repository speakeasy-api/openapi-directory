package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AddRulesRequest {
    @JsonProperty("add")
    public RuleNoId[] add;
    public AddRulesRequest withAdd(RuleNoId[] add) {
        this.add = add;
        return this;
    }
}