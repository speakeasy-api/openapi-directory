package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTransactionsTransactionIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=transactionId")
    public String transactionId;
    public PostTransactionsTransactionIdPathParams withTransactionId(String transactionId) {
        this.transactionId = transactionId;
        return this;
    }
}