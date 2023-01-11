package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Review
 * Output only. Represents a review for a location.
**/
public class Review {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comment")
    public String comment;
    public Review withComment(String comment) {
        this.comment = comment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public Review withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Review withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reviewId")
    public String reviewId;
    public Review withReviewId(String reviewId) {
        this.reviewId = reviewId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reviewReply")
    public ReviewReply reviewReply;
    public Review withReviewReply(ReviewReply reviewReply) {
        this.reviewReply = reviewReply;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reviewer")
    public Reviewer reviewer;
    public Review withReviewer(Reviewer reviewer) {
        this.reviewer = reviewer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("starRating")
    public ReviewStarRatingEnum starRating;
    public Review withStarRating(ReviewStarRatingEnum starRating) {
        this.starRating = starRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public Review withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}