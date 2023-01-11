package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTransactionsTransactionIdRelationshipsTagsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=transactionId")
    public String transactionId;
    public PostTransactionsTransactionIdRelationshipsTagsPathParams withTransactionId(String transactionId) {
        this.transactionId = transactionId;
        return this;
    }
}