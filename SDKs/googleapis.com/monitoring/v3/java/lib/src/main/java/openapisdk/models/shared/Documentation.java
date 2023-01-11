package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Documentation
 * A content string and a MIME type that describes the content string's format.
**/
public class Documentation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content")
    public String content;
    public Documentation withContent(String content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mimeType")
    public String mimeType;
    public Documentation withMimeType(String mimeType) {
        this.mimeType = mimeType;
        return this;
    }
}