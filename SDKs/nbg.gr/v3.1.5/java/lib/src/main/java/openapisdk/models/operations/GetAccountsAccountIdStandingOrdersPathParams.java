package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAccountsAccountIdStandingOrdersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public GetAccountsAccountIdStandingOrdersPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
}