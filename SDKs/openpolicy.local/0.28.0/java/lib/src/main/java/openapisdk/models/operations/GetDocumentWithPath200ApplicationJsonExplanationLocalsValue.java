package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetDocumentWithPath200ApplicationJsonExplanationLocalsValue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public GetDocumentWithPath200ApplicationJsonExplanationLocalsValue withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public GetDocumentWithPath200ApplicationJsonExplanationLocalsValue withValue(String value) {
        this.value = value;
        return this;
    }
}