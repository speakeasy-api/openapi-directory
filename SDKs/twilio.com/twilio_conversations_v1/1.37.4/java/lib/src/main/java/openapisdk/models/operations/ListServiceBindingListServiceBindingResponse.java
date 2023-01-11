package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListServiceBindingListServiceBindingResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bindings")
    public openapisdk.models.shared.ConversationsV1ServiceServiceBinding[] bindings;
    public ListServiceBindingListServiceBindingResponse withBindings(openapisdk.models.shared.ConversationsV1ServiceServiceBinding[] bindings) {
        this.bindings = bindings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListServiceBindingListServiceBindingResponseMeta meta;
    public ListServiceBindingListServiceBindingResponse withMeta(ListServiceBindingListServiceBindingResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}