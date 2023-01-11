package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateScriptTagRequestBodyScriptTag {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("display_scope")
    public UpdateScriptTagRequestBodyScriptTagDisplayScopeEnum displayScope;
    public UpdateScriptTagRequestBodyScriptTag withDisplayScope(UpdateScriptTagRequestBodyScriptTagDisplayScopeEnum displayScope) {
        this.displayScope = displayScope;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("src")
    public String src;
    public UpdateScriptTagRequestBodyScriptTag withSrc(String src) {
        this.src = src;
        return this;
    }
}