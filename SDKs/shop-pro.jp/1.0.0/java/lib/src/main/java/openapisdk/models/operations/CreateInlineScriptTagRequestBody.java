package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateInlineScriptTagRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inline_script_tag")
    public CreateInlineScriptTagRequestBodyInlineScriptTag inlineScriptTag;
    public CreateInlineScriptTagRequestBody withInlineScriptTag(CreateInlineScriptTagRequestBodyInlineScriptTag inlineScriptTag) {
        this.inlineScriptTag = inlineScriptTag;
        return this;
    }
}