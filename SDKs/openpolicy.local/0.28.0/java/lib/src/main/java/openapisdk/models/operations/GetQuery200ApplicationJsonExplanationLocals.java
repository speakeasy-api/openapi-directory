package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetQuery200ApplicationJsonExplanationLocals {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public GetQuery200ApplicationJsonExplanationLocalsKey key;
    public GetQuery200ApplicationJsonExplanationLocals withKey(GetQuery200ApplicationJsonExplanationLocalsKey key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public GetQuery200ApplicationJsonExplanationLocalsValue value;
    public GetQuery200ApplicationJsonExplanationLocals withValue(GetQuery200ApplicationJsonExplanationLocalsValue value) {
        this.value = value;
        return this;
    }
}