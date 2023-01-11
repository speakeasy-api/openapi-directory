package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateInlineScriptTag200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inline_script_tag")
    public UpdateInlineScriptTag200ApplicationJsonInlineScriptTag inlineScriptTag;
    public UpdateInlineScriptTag200ApplicationJson withInlineScriptTag(UpdateInlineScriptTag200ApplicationJsonInlineScriptTag inlineScriptTag) {
        this.inlineScriptTag = inlineScriptTag;
        return this;
    }
}