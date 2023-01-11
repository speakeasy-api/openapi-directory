package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateScriptTagRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("script_tag")
    public CreateScriptTagRequestBodyScriptTag scriptTag;
    public CreateScriptTagRequestBody withScriptTag(CreateScriptTagRequestBodyScriptTag scriptTag) {
        this.scriptTag = scriptTag;
        return this;
    }
}