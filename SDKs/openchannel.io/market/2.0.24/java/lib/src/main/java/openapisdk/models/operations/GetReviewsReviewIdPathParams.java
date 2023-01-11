package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetReviewsReviewIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=reviewId")
    public String reviewId;
    public GetReviewsReviewIdPathParams withReviewId(String reviewId) {
        this.reviewId = reviewId;
        return this;
    }
}