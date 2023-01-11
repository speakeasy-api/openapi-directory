package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateShopScriptTagRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("script_tag")
    public CreateShopScriptTagRequestBodyScriptTag scriptTag;
    public CreateShopScriptTagRequestBody withScriptTag(CreateShopScriptTagRequestBodyScriptTag scriptTag) {
        this.scriptTag = scriptTag;
        return this;
    }
}