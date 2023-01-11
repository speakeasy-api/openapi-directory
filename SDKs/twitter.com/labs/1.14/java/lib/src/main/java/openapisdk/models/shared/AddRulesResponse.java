package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AddRulesResponse {
    @JsonProperty("data")
    public Rule[] data;
    public AddRulesResponse withData(Rule[] data) {
        this.data = data;
        return this;
    }
    @JsonProperty("meta")
    public RulesResponseMetadata meta;
    public AddRulesResponse withMeta(RulesResponseMetadata meta) {
        this.meta = meta;
        return this;
    }
}