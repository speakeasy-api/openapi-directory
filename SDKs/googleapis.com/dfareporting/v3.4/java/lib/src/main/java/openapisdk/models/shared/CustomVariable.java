package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomVariable
 * Custom variable.
**/
public class CustomVariable {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("index")
    public String index;
    public CustomVariable withIndex(String index) {
        this.index = index;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public CustomVariable withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public CustomVariable withValue(String value) {
        this.value = value;
        return this;
    }
}