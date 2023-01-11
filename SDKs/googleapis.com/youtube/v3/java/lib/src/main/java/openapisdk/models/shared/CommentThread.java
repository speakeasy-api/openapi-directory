package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CommentThread
 * A *comment thread* represents information that applies to a top level comment and all its replies. It can also include the top level comment itself and some of the replies.
**/
public class CommentThread {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public CommentThread withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public CommentThread withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public CommentThread withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("replies")
    public CommentThreadReplies replies;
    public CommentThread withReplies(CommentThreadReplies replies) {
        this.replies = replies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("snippet")
    public CommentThreadSnippet snippet;
    public CommentThread withSnippet(CommentThreadSnippet snippet) {
        this.snippet = snippet;
        return this;
    }
}