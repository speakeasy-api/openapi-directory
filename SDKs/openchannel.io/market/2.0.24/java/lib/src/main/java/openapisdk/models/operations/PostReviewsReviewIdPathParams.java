package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostReviewsReviewIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=reviewId")
    public String reviewId;
    public PostReviewsReviewIdPathParams withReviewId(String reviewId) {
        this.reviewId = reviewId;
        return this;
    }
}