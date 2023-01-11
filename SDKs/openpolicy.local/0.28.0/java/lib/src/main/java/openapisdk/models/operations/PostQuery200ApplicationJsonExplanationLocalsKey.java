package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostQuery200ApplicationJsonExplanationLocalsKey {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public PostQuery200ApplicationJsonExplanationLocalsKey withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public PostQuery200ApplicationJsonExplanationLocalsKey withValue(String value) {
        this.value = value;
        return this;
    }
}