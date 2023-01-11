package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostReviewsReviewIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=customData")
    public String customData;
    public PostReviewsReviewIdQueryParams withCustomData(String customData) {
        this.customData = customData;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=description")
    public String description;
    public PostReviewsReviewIdQueryParams withDescription(String description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=headline")
    public String headline;
    public PostReviewsReviewIdQueryParams withHeadline(String headline) {
        this.headline = headline;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=rating")
    public Long rating;
    public PostReviewsReviewIdQueryParams withRating(Long rating) {
        this.rating = rating;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userAccountId")
    public String userAccountId;
    public PostReviewsReviewIdQueryParams withUserAccountId(String userAccountId) {
        this.userAccountId = userAccountId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userId")
    public String userId;
    public PostReviewsReviewIdQueryParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}