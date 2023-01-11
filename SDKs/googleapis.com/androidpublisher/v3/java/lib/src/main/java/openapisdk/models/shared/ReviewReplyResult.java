package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReviewReplyResult
 * The result of replying/updating a reply to review.
**/
public class ReviewReplyResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastEdited")
    public Timestamp lastEdited;
    public ReviewReplyResult withLastEdited(Timestamp lastEdited) {
        this.lastEdited = lastEdited;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("replyText")
    public String replyText;
    public ReviewReplyResult withReplyText(String replyText) {
        this.replyText = replyText;
        return this;
    }
}