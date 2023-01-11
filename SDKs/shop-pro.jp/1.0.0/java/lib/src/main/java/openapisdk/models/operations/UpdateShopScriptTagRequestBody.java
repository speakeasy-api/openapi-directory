package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateShopScriptTagRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("script_tag")
    public UpdateShopScriptTagRequestBodyScriptTag scriptTag;
    public UpdateShopScriptTagRequestBody withScriptTag(UpdateShopScriptTagRequestBodyScriptTag scriptTag) {
        this.scriptTag = scriptTag;
        return this;
    }
}