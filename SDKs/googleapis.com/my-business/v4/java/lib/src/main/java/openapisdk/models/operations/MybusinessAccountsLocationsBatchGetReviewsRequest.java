package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessAccountsLocationsBatchGetReviewsRequest {
    public MybusinessAccountsLocationsBatchGetReviewsPathParams pathParams;
    public MybusinessAccountsLocationsBatchGetReviewsRequest withPathParams(MybusinessAccountsLocationsBatchGetReviewsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MybusinessAccountsLocationsBatchGetReviewsQueryParams queryParams;
    public MybusinessAccountsLocationsBatchGetReviewsRequest withQueryParams(MybusinessAccountsLocationsBatchGetReviewsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchGetReviewsRequest request;
    public MybusinessAccountsLocationsBatchGetReviewsRequest withRequest(openapisdk.models.shared.BatchGetReviewsRequest request) {
        this.request = request;
        return this;
    }
}