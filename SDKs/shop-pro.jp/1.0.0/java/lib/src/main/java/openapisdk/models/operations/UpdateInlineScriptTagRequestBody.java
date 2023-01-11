package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateInlineScriptTagRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inline_script_tag")
    public UpdateInlineScriptTagRequestBodyInlineScriptTag inlineScriptTag;
    public UpdateInlineScriptTagRequestBody withInlineScriptTag(UpdateInlineScriptTagRequestBodyInlineScriptTag inlineScriptTag) {
        this.inlineScriptTag = inlineScriptTag;
        return this;
    }
}