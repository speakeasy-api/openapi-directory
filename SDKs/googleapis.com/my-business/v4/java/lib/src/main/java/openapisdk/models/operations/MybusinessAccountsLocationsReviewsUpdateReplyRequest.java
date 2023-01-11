package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessAccountsLocationsReviewsUpdateReplyRequest {
    public MybusinessAccountsLocationsReviewsUpdateReplyPathParams pathParams;
    public MybusinessAccountsLocationsReviewsUpdateReplyRequest withPathParams(MybusinessAccountsLocationsReviewsUpdateReplyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MybusinessAccountsLocationsReviewsUpdateReplyQueryParams queryParams;
    public MybusinessAccountsLocationsReviewsUpdateReplyRequest withQueryParams(MybusinessAccountsLocationsReviewsUpdateReplyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ReviewReply request;
    public MybusinessAccountsLocationsReviewsUpdateReplyRequest withRequest(openapisdk.models.shared.ReviewReply request) {
        this.request = request;
        return this;
    }
}