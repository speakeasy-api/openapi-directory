package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostQuery200ApplicationJsonExplanationLocals {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public PostQuery200ApplicationJsonExplanationLocalsKey key;
    public PostQuery200ApplicationJsonExplanationLocals withKey(PostQuery200ApplicationJsonExplanationLocalsKey key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public PostQuery200ApplicationJsonExplanationLocalsValue value;
    public PostQuery200ApplicationJsonExplanationLocals withValue(PostQuery200ApplicationJsonExplanationLocalsValue value) {
        this.value = value;
        return this;
    }
}