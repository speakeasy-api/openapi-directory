package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateScriptTagRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("script_tag")
    public UpdateScriptTagRequestBodyScriptTag scriptTag;
    public UpdateScriptTagRequestBody withScriptTag(UpdateScriptTagRequestBodyScriptTag scriptTag) {
        this.scriptTag = scriptTag;
        return this;
    }
}