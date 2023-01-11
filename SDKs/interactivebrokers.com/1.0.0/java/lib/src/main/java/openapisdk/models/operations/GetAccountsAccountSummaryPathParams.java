package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAccountsAccountSummaryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=account")
    public String account;
    public GetAccountsAccountSummaryPathParams withAccount(String account) {
        this.account = account;
        return this;
    }
}