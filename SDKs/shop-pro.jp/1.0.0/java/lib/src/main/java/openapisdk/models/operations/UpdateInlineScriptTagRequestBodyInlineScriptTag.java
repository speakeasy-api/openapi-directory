package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateInlineScriptTagRequestBodyInlineScriptTag {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("display_scope")
    public UpdateInlineScriptTagRequestBodyInlineScriptTagDisplayScopeEnum displayScope;
    public UpdateInlineScriptTagRequestBodyInlineScriptTag withDisplayScope(UpdateInlineScriptTagRequestBodyInlineScriptTagDisplayScopeEnum displayScope) {
        this.displayScope = displayScope;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("script")
    public String script;
    public UpdateInlineScriptTagRequestBodyInlineScriptTag withScript(String script) {
        this.script = script;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trigger_event")
    public UpdateInlineScriptTagRequestBodyInlineScriptTagTriggerEventEnum triggerEvent;
    public UpdateInlineScriptTagRequestBodyInlineScriptTag withTriggerEvent(UpdateInlineScriptTagRequestBodyInlineScriptTagTriggerEventEnum triggerEvent) {
        this.triggerEvent = triggerEvent;
        return this;
    }
}