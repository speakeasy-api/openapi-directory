package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetDocumentWithWebHook200ApplicationJsonExplanationLocals {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public GetDocumentWithWebHook200ApplicationJsonExplanationLocalsKey key;
    public GetDocumentWithWebHook200ApplicationJsonExplanationLocals withKey(GetDocumentWithWebHook200ApplicationJsonExplanationLocalsKey key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public GetDocumentWithWebHook200ApplicationJsonExplanationLocalsValue value;
    public GetDocumentWithWebHook200ApplicationJsonExplanationLocals withValue(GetDocumentWithWebHook200ApplicationJsonExplanationLocalsValue value) {
        this.value = value;
        return this;
    }
}