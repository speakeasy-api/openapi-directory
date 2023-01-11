package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetScriptTag200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("script_tag")
    public GetScriptTag200ApplicationJsonScriptTag scriptTag;
    public GetScriptTag200ApplicationJson withScriptTag(GetScriptTag200ApplicationJsonScriptTag scriptTag) {
        this.scriptTag = scriptTag;
        return this;
    }
}