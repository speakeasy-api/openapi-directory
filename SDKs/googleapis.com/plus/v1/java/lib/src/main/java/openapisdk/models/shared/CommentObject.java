package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CommentObject
 * The object of this comment.
**/
public class CommentObject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content")
    public String content;
    public CommentObject withContent(String content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectType")
    public String objectType;
    public CommentObject withObjectType(String objectType) {
        this.objectType = objectType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("originalContent")
    public String originalContent;
    public CommentObject withOriginalContent(String originalContent) {
        this.originalContent = originalContent;
        return this;
    }
}