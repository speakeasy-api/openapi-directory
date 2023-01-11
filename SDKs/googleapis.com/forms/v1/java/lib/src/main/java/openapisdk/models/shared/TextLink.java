package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TextLink
 * Link for text.
**/
public class TextLink {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayText")
    public String displayText;
    public TextLink withDisplayText(String displayText) {
        this.displayText = displayText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public TextLink withUri(String uri) {
        this.uri = uri;
        return this;
    }
}