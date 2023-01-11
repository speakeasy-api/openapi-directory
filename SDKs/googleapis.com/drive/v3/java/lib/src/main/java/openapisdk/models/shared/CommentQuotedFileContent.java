package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CommentQuotedFileContent
 * The file content to which the comment refers, typically within the anchor region. For a text file, for example, this would be the text at the location of the comment.
**/
public class CommentQuotedFileContent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mimeType")
    public String mimeType;
    public CommentQuotedFileContent withMimeType(String mimeType) {
        this.mimeType = mimeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public CommentQuotedFileContent withValue(String value) {
        this.value = value;
        return this;
    }
}