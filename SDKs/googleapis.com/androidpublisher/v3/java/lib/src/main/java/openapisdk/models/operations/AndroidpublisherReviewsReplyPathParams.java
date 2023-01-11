package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherReviewsReplyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=packageName")
    public String packageName;
    public AndroidpublisherReviewsReplyPathParams withPackageName(String packageName) {
        this.packageName = packageName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=reviewId")
    public String reviewId;
    public AndroidpublisherReviewsReplyPathParams withReviewId(String reviewId) {
        this.reviewId = reviewId;
        return this;
    }
}