package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteReviewsReviewIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=reviewId")
    public String reviewId;
    public DeleteReviewsReviewIdPathParams withReviewId(String reviewId) {
        this.reviewId = reviewId;
        return this;
    }
}