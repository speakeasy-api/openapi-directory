package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchGetReviewsResponse
 * Response message for Reviews.BatchGetReviews.
**/
public class BatchGetReviewsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locationReviews")
    public LocationReview[] locationReviews;
    public BatchGetReviewsResponse withLocationReviews(LocationReview[] locationReviews) {
        this.locationReviews = locationReviews;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public BatchGetReviewsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}