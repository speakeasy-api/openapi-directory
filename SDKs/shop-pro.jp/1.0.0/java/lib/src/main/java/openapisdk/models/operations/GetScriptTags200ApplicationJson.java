package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetScriptTags200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("script_tags")
    public GetScriptTags200ApplicationJsonScriptTags[] scriptTags;
    public GetScriptTags200ApplicationJson withScriptTags(GetScriptTags200ApplicationJsonScriptTags[] scriptTags) {
        this.scriptTags = scriptTags;
        return this;
    }
}