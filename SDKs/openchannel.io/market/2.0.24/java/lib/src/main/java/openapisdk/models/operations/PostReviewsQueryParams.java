package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostReviewsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=appId")
    public String appId;
    public PostReviewsQueryParams withAppId(String appId) {
        this.appId = appId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=autoApprove")
    public Boolean autoApprove;
    public PostReviewsQueryParams withAutoApprove(Boolean autoApprove) {
        this.autoApprove = autoApprove;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=customData")
    public String customData;
    public PostReviewsQueryParams withCustomData(String customData) {
        this.customData = customData;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=description")
    public String description;
    public PostReviewsQueryParams withDescription(String description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=headline")
    public String headline;
    public PostReviewsQueryParams withHeadline(String headline) {
        this.headline = headline;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=mustOwnApp")
    public Boolean mustOwnApp;
    public PostReviewsQueryParams withMustOwnApp(Boolean mustOwnApp) {
        this.mustOwnApp = mustOwnApp;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=rating")
    public Long rating;
    public PostReviewsQueryParams withRating(Long rating) {
        this.rating = rating;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public String type;
    public PostReviewsQueryParams withType(String type) {
        this.type = type;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userAccountId")
    public String userAccountId;
    public PostReviewsQueryParams withUserAccountId(String userAccountId) {
        this.userAccountId = userAccountId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userId")
    public String userId;
    public PostReviewsQueryParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}