package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TextPosition
 * Position settings for text.
**/
public class TextPosition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("horizontalAlignment")
    public TextPositionHorizontalAlignmentEnum horizontalAlignment;
    public TextPosition withHorizontalAlignment(TextPositionHorizontalAlignmentEnum horizontalAlignment) {
        this.horizontalAlignment = horizontalAlignment;
        return this;
    }
}