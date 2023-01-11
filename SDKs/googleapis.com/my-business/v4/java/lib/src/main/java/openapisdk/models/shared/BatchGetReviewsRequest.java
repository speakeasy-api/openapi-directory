package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchGetReviewsRequest
 * Request message for Reviews.BatchGetReviews.
**/
public class BatchGetReviewsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ignoreRatingOnlyReviews")
    public Boolean ignoreRatingOnlyReviews;
    public BatchGetReviewsRequest withIgnoreRatingOnlyReviews(Boolean ignoreRatingOnlyReviews) {
        this.ignoreRatingOnlyReviews = ignoreRatingOnlyReviews;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locationNames")
    public String[] locationNames;
    public BatchGetReviewsRequest withLocationNames(String[] locationNames) {
        this.locationNames = locationNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderBy")
    public String orderBy;
    public BatchGetReviewsRequest withOrderBy(String orderBy) {
        this.orderBy = orderBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageSize")
    public Integer pageSize;
    public BatchGetReviewsRequest withPageSize(Integer pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageToken")
    public String pageToken;
    public BatchGetReviewsRequest withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
}