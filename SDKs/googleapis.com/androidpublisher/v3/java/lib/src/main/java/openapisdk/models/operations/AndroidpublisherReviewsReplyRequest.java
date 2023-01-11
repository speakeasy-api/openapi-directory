package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherReviewsReplyRequest {
    public AndroidpublisherReviewsReplyPathParams pathParams;
    public AndroidpublisherReviewsReplyRequest withPathParams(AndroidpublisherReviewsReplyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AndroidpublisherReviewsReplyQueryParams queryParams;
    public AndroidpublisherReviewsReplyRequest withQueryParams(AndroidpublisherReviewsReplyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ReviewsReplyRequest request;
    public AndroidpublisherReviewsReplyRequest withRequest(openapisdk.models.shared.ReviewsReplyRequest request) {
        this.request = request;
        return this;
    }
    public AndroidpublisherReviewsReplySecurity security;
    public AndroidpublisherReviewsReplyRequest withSecurity(AndroidpublisherReviewsReplySecurity security) {
        this.security = security;
        return this;
    }
}