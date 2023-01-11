package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateScriptTagRequestBodyScriptTag {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("display_scope")
    public CreateScriptTagRequestBodyScriptTagDisplayScopeEnum displayScope;
    public CreateScriptTagRequestBodyScriptTag withDisplayScope(CreateScriptTagRequestBodyScriptTagDisplayScopeEnum displayScope) {
        this.displayScope = displayScope;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("src")
    public String src;
    public CreateScriptTagRequestBodyScriptTag withSrc(String src) {
        this.src = src;
        return this;
    }
}