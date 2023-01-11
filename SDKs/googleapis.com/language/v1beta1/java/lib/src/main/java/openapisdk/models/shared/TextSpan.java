package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TextSpan
 * Represents an output piece of text.
**/
public class TextSpan {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("beginOffset")
    public Integer beginOffset;
    public TextSpan withBeginOffset(Integer beginOffset) {
        this.beginOffset = beginOffset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content")
    public String content;
    public TextSpan withContent(String content) {
        this.content = content;
        return this;
    }
}