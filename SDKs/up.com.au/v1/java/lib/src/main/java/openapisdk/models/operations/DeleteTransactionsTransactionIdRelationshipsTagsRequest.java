package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteTransactionsTransactionIdRelationshipsTagsRequest {
    public DeleteTransactionsTransactionIdRelationshipsTagsPathParams pathParams;
    public DeleteTransactionsTransactionIdRelationshipsTagsRequest withPathParams(DeleteTransactionsTransactionIdRelationshipsTagsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateTransactionTagsRequest request;
    public DeleteTransactionsTransactionIdRelationshipsTagsRequest withRequest(openapisdk.models.shared.UpdateTransactionTagsRequest request) {
        this.request = request;
        return this;
    }
}