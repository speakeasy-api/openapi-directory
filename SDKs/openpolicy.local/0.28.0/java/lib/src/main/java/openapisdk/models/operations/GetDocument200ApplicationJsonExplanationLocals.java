package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetDocument200ApplicationJsonExplanationLocals {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public GetDocument200ApplicationJsonExplanationLocalsKey key;
    public GetDocument200ApplicationJsonExplanationLocals withKey(GetDocument200ApplicationJsonExplanationLocalsKey key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public GetDocument200ApplicationJsonExplanationLocalsValue value;
    public GetDocument200ApplicationJsonExplanationLocals withValue(GetDocument200ApplicationJsonExplanationLocalsValue value) {
        this.value = value;
        return this;
    }
}