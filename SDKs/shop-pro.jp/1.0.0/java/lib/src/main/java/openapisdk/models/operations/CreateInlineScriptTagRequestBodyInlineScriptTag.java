package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateInlineScriptTagRequestBodyInlineScriptTag {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("display_scope")
    public CreateInlineScriptTagRequestBodyInlineScriptTagDisplayScopeEnum displayScope;
    public CreateInlineScriptTagRequestBodyInlineScriptTag withDisplayScope(CreateInlineScriptTagRequestBodyInlineScriptTagDisplayScopeEnum displayScope) {
        this.displayScope = displayScope;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("script")
    public String script;
    public CreateInlineScriptTagRequestBodyInlineScriptTag withScript(String script) {
        this.script = script;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trigger_event")
    public CreateInlineScriptTagRequestBodyInlineScriptTagTriggerEventEnum triggerEvent;
    public CreateInlineScriptTagRequestBodyInlineScriptTag withTriggerEvent(CreateInlineScriptTagRequestBodyInlineScriptTagTriggerEventEnum triggerEvent) {
        this.triggerEvent = triggerEvent;
        return this;
    }
}