package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAccountsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=account")
    public String account;
    public GetAccountsQueryParams withAccount(String account) {
        this.account = account;
        return this;
    }
}