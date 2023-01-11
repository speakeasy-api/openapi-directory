package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherReviewsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=packageName")
    public String packageName;
    public AndroidpublisherReviewsGetPathParams withPackageName(String packageName) {
        this.packageName = packageName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=reviewId")
    public String reviewId;
    public AndroidpublisherReviewsGetPathParams withReviewId(String reviewId) {
        this.reviewId = reviewId;
        return this;
    }
}