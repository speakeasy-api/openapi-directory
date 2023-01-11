package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListCompositionHookListCompositionHookResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("composition_hooks")
    public openapisdk.models.shared.VideoV1CompositionHook[] compositionHooks;
    public ListCompositionHookListCompositionHookResponse withCompositionHooks(openapisdk.models.shared.VideoV1CompositionHook[] compositionHooks) {
        this.compositionHooks = compositionHooks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListCompositionHookListCompositionHookResponseMeta meta;
    public ListCompositionHookListCompositionHookResponse withMeta(ListCompositionHookListCompositionHookResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}