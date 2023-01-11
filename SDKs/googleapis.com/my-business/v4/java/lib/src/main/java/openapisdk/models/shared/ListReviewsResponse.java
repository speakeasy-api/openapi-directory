package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListReviewsResponse
 * Response message for Reviews.ListReviews.
**/
public class ListReviewsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("averageRating")
    public Double averageRating;
    public ListReviewsResponse withAverageRating(Double averageRating) {
        this.averageRating = averageRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListReviewsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reviews")
    public Review[] reviews;
    public ListReviewsResponse withReviews(Review[] reviews) {
        this.reviews = reviews;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalReviewCount")
    public Integer totalReviewCount;
    public ListReviewsResponse withTotalReviewCount(Integer totalReviewCount) {
        this.totalReviewCount = totalReviewCount;
        return this;
    }
}