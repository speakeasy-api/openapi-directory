package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteRulesResponse {
    @JsonProperty("meta")
    public RulesResponseMetadata meta;
    public DeleteRulesResponse withMeta(RulesResponseMetadata meta) {
        this.meta = meta;
        return this;
    }
}