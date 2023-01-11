package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Text
 * Wrapper for Text Field value.
**/
public class Text {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public Text withValue(String value) {
        this.value = value;
        return this;
    }
}