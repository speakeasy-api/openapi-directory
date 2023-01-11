package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTransactionDetailsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=account-id")
    public String accountId;
    public GetTransactionDetailsPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=transactionId")
    public String transactionId;
    public GetTransactionDetailsPathParams withTransactionId(String transactionId) {
        this.transactionId = transactionId;
        return this;
    }
}