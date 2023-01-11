package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateShopScriptTag200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("script_tag")
    public CreateShopScriptTag200ApplicationJsonScriptTag scriptTag;
    public CreateShopScriptTag200ApplicationJson withScriptTag(CreateShopScriptTag200ApplicationJsonScriptTag scriptTag) {
        this.scriptTag = scriptTag;
        return this;
    }
}