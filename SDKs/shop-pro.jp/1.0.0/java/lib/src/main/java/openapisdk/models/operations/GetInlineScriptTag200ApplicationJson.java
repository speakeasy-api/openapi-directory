package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetInlineScriptTag200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inline_script_tag")
    public GetInlineScriptTag200ApplicationJsonInlineScriptTag inlineScriptTag;
    public GetInlineScriptTag200ApplicationJson withInlineScriptTag(GetInlineScriptTag200ApplicationJsonInlineScriptTag inlineScriptTag) {
        this.inlineScriptTag = inlineScriptTag;
        return this;
    }
}