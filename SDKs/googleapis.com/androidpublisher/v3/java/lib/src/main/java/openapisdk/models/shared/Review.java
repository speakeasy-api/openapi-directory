package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Review
 * An Android app review.
**/
public class Review {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorName")
    public String authorName;
    public Review withAuthorName(String authorName) {
        this.authorName = authorName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comments")
    public Comment[] comments;
    public Review withComments(Comment[] comments) {
        this.comments = comments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reviewId")
    public String reviewId;
    public Review withReviewId(String reviewId) {
        this.reviewId = reviewId;
        return this;
    }
}