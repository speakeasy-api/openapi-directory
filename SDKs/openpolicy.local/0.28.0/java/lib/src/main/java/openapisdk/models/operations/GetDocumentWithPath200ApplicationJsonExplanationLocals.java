package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetDocumentWithPath200ApplicationJsonExplanationLocals {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public GetDocumentWithPath200ApplicationJsonExplanationLocalsKey key;
    public GetDocumentWithPath200ApplicationJsonExplanationLocals withKey(GetDocumentWithPath200ApplicationJsonExplanationLocalsKey key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public GetDocumentWithPath200ApplicationJsonExplanationLocalsValue value;
    public GetDocumentWithPath200ApplicationJsonExplanationLocals withValue(GetDocumentWithPath200ApplicationJsonExplanationLocalsValue value) {
        this.value = value;
        return this;
    }
}