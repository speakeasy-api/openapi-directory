package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAccountsAccountPositionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=account")
    public String account;
    public GetAccountsAccountPositionsPathParams withAccount(String account) {
        this.account = account;
        return this;
    }
}