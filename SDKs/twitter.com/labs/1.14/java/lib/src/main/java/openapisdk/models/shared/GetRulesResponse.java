package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetRulesResponse {
    @JsonProperty("data")
    public Rule[] data;
    public GetRulesResponse withData(Rule[] data) {
        this.data = data;
        return this;
    }
    @JsonProperty("meta")
    public RulesResponseMetadata meta;
    public GetRulesResponse withMeta(RulesResponseMetadata meta) {
        this.meta = meta;
        return this;
    }
}