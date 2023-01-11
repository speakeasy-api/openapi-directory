package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTransactionsTransactionIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=transactionId")
    public String transactionId;
    public GetTransactionsTransactionIdPathParams withTransactionId(String transactionId) {
        this.transactionId = transactionId;
        return this;
    }
}