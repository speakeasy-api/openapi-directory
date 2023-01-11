package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TextEntry
 * Represents a body of text.
**/
public class TextEntry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public String text;
    public TextEntry withText(String text) {
        this.text = text;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public TextEntryTypeEnum type;
    public TextEntry withType(TextEntryTypeEnum type) {
        this.type = type;
        return this;
    }
}