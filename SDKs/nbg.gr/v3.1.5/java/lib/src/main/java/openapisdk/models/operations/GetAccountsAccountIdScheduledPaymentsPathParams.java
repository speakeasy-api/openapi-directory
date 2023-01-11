package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAccountsAccountIdScheduledPaymentsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public GetAccountsAccountIdScheduledPaymentsPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
}