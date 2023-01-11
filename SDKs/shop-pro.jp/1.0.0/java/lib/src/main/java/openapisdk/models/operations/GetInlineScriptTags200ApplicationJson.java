package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetInlineScriptTags200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inline_script_tags")
    public GetInlineScriptTags200ApplicationJsonInlineScriptTags[] inlineScriptTags;
    public GetInlineScriptTags200ApplicationJson withInlineScriptTags(GetInlineScriptTags200ApplicationJsonInlineScriptTags[] inlineScriptTags) {
        this.inlineScriptTags = inlineScriptTags;
        return this;
    }
}