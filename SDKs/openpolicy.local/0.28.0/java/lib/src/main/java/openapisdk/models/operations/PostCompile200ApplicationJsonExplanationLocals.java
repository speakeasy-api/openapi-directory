package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostCompile200ApplicationJsonExplanationLocals {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public PostCompile200ApplicationJsonExplanationLocalsKey key;
    public PostCompile200ApplicationJsonExplanationLocals withKey(PostCompile200ApplicationJsonExplanationLocalsKey key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public PostCompile200ApplicationJsonExplanationLocalsValue value;
    public PostCompile200ApplicationJsonExplanationLocals withValue(PostCompile200ApplicationJsonExplanationLocalsValue value) {
        this.value = value;
        return this;
    }
}