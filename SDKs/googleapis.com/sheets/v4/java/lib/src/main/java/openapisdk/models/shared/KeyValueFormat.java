package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * KeyValueFormat
 * Formatting options for key value.
**/
public class KeyValueFormat {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("position")
    public TextPosition position;
    public KeyValueFormat withPosition(TextPosition position) {
        this.position = position;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("textFormat")
    public TextFormat textFormat;
    public KeyValueFormat withTextFormat(TextFormat textFormat) {
        this.textFormat = textFormat;
        return this;
    }
}