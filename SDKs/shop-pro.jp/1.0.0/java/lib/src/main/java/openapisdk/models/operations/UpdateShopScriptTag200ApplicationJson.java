package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateShopScriptTag200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("script_tag")
    public UpdateShopScriptTag200ApplicationJsonScriptTag scriptTag;
    public UpdateShopScriptTag200ApplicationJson withScriptTag(UpdateShopScriptTag200ApplicationJsonScriptTag scriptTag) {
        this.scriptTag = scriptTag;
        return this;
    }
}