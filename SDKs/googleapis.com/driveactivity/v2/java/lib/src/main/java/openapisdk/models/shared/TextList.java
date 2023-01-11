package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TextList
 * Wrapper for Text List Field value.
**/
public class TextList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("values")
    public Text[] values;
    public TextList withValues(Text[] values) {
        this.values = values;
        return this;
    }
}