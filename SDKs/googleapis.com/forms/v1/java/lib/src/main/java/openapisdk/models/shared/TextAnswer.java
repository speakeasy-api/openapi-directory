package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TextAnswer
 * An answer to a question represented as text.
**/
public class TextAnswer {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public TextAnswer withValue(String value) {
        this.value = value;
        return this;
    }
}