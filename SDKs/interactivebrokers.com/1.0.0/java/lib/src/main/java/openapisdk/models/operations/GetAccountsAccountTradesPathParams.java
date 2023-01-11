package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAccountsAccountTradesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=account")
    public String account;
    public GetAccountsAccountTradesPathParams withAccount(String account) {
        this.account = account;
        return this;
    }
}