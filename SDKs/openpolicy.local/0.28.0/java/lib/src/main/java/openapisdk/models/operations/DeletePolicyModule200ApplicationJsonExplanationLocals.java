package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeletePolicyModule200ApplicationJsonExplanationLocals {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public DeletePolicyModule200ApplicationJsonExplanationLocalsKey key;
    public DeletePolicyModule200ApplicationJsonExplanationLocals withKey(DeletePolicyModule200ApplicationJsonExplanationLocalsKey key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public DeletePolicyModule200ApplicationJsonExplanationLocalsValue value;
    public DeletePolicyModule200ApplicationJsonExplanationLocals withValue(DeletePolicyModule200ApplicationJsonExplanationLocalsValue value) {
        this.value = value;
        return this;
    }
}