package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListUserBindingListUserBindingResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bindings")
    public openapisdk.models.shared.ChatV2ServiceUserUserBinding[] bindings;
    public ListUserBindingListUserBindingResponse withBindings(openapisdk.models.shared.ChatV2ServiceUserUserBinding[] bindings) {
        this.bindings = bindings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListUserBindingListUserBindingResponseMeta meta;
    public ListUserBindingListUserBindingResponse withMeta(ListUserBindingListUserBindingResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}