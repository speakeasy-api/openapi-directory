package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteTransactionsTransactionIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=transactionId")
    public String transactionId;
    public DeleteTransactionsTransactionIdPathParams withTransactionId(String transactionId) {
        this.transactionId = transactionId;
        return this;
    }
}