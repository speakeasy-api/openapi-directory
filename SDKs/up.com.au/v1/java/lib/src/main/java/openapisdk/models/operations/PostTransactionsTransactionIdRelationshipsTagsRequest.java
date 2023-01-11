package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTransactionsTransactionIdRelationshipsTagsRequest {
    public PostTransactionsTransactionIdRelationshipsTagsPathParams pathParams;
    public PostTransactionsTransactionIdRelationshipsTagsRequest withPathParams(PostTransactionsTransactionIdRelationshipsTagsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateTransactionTagsRequest request;
    public PostTransactionsTransactionIdRelationshipsTagsRequest withRequest(openapisdk.models.shared.UpdateTransactionTagsRequest request) {
        this.request = request;
        return this;
    }
}