package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReviewsReplyResponse
 * Response on status of replying to a review.
**/
public class ReviewsReplyResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("result")
    public ReviewReplyResult result;
    public ReviewsReplyResponse withResult(ReviewReplyResult result) {
        this.result = result;
        return this;
    }
}