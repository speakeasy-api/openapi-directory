package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetShopScriptTag200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("script_tag")
    public GetShopScriptTag200ApplicationJsonScriptTag scriptTag;
    public GetShopScriptTag200ApplicationJson withScriptTag(GetShopScriptTag200ApplicationJsonScriptTag scriptTag) {
        this.scriptTag = scriptTag;
        return this;
    }
}