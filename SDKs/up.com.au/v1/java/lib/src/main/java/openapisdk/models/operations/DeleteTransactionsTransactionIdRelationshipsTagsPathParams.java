package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteTransactionsTransactionIdRelationshipsTagsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=transactionId")
    public String transactionId;
    public DeleteTransactionsTransactionIdRelationshipsTagsPathParams withTransactionId(String transactionId) {
        this.transactionId = transactionId;
        return this;
    }
}