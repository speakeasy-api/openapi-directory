package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateScriptTag200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("script_tag")
    public CreateScriptTag200ApplicationJsonScriptTag scriptTag;
    public CreateScriptTag200ApplicationJson withScriptTag(CreateScriptTag200ApplicationJsonScriptTag scriptTag) {
        this.scriptTag = scriptTag;
        return this;
    }
}