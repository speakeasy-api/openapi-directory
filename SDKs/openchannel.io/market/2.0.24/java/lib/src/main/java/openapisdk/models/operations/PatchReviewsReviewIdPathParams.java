package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchReviewsReviewIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=reviewId")
    public String reviewId;
    public PatchReviewsReviewIdPathParams withReviewId(String reviewId) {
        this.reviewId = reviewId;
        return this;
    }
}