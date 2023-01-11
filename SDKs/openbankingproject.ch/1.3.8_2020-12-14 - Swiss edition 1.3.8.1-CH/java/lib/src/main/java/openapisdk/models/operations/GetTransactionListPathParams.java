package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTransactionListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=account-id")
    public String accountId;
    public GetTransactionListPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
}