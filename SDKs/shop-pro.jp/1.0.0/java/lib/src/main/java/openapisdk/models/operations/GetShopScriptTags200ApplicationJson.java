package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetShopScriptTags200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("script_tags")
    public GetShopScriptTags200ApplicationJsonScriptTags[] scriptTags;
    public GetShopScriptTags200ApplicationJson withScriptTags(GetShopScriptTags200ApplicationJsonScriptTags[] scriptTags) {
        this.scriptTags = scriptTags;
        return this;
    }
}