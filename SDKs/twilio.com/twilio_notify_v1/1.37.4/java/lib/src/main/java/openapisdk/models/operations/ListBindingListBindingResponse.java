package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListBindingListBindingResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bindings")
    public openapisdk.models.shared.NotifyV1ServiceBinding[] bindings;
    public ListBindingListBindingResponse withBindings(openapisdk.models.shared.NotifyV1ServiceBinding[] bindings) {
        this.bindings = bindings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListBindingListBindingResponseMeta meta;
    public ListBindingListBindingResponse withMeta(ListBindingListBindingResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}