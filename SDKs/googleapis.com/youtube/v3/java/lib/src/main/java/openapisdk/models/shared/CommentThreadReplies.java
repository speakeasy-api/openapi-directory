package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CommentThreadReplies
 * Comments written in (direct or indirect) reply to the top level comment.
**/
public class CommentThreadReplies {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comments")
    public Comment[] comments;
    public CommentThreadReplies withComments(Comment[] comments) {
        this.comments = comments;
        return this;
    }
}