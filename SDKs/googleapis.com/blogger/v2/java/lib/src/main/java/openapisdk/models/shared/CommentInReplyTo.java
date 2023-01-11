package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CommentInReplyTo
 * Data about the comment this is in reply to.
**/
public class CommentInReplyTo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public CommentInReplyTo withId(String id) {
        this.id = id;
        return this;
    }
}