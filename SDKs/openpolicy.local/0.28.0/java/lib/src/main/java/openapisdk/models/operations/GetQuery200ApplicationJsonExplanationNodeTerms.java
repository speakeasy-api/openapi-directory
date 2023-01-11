package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetQuery200ApplicationJsonExplanationNodeTerms {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public GetQuery200ApplicationJsonExplanationNodeTerms withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public GetQuery200ApplicationJsonExplanationNodeTerms withValue(String value) {
        this.value = value;
        return this;
    }
}