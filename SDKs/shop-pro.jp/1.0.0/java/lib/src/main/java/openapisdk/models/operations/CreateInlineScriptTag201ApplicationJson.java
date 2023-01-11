package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateInlineScriptTag201ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inline_script_tag")
    public CreateInlineScriptTag201ApplicationJsonInlineScriptTag inlineScriptTag;
    public CreateInlineScriptTag201ApplicationJson withInlineScriptTag(CreateInlineScriptTag201ApplicationJsonInlineScriptTag inlineScriptTag) {
        this.inlineScriptTag = inlineScriptTag;
        return this;
    }
}