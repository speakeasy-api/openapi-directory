package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PullsRemoveRequestedReviewersRequest {
    public PullsRemoveRequestedReviewersPathParams pathParams;
    public PullsRemoveRequestedReviewersRequest withPathParams(PullsRemoveRequestedReviewersPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PullsRemoveRequestedReviewersRequestBody request;
    public PullsRemoveRequestedReviewersRequest withRequest(PullsRemoveRequestedReviewersRequestBody request) {
        this.request = request;
        return this;
    }
}