package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReviewsReplyRequest
 * Request to reply to review or update existing reply.
**/
public class ReviewsReplyRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("replyText")
    public String replyText;
    public ReviewsReplyRequest withReplyText(String replyText) {
        this.replyText = replyText;
        return this;
    }
}