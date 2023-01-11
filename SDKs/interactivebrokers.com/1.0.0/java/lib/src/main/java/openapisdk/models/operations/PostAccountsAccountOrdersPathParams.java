package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAccountsAccountOrdersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=account")
    public String account;
    public PostAccountsAccountOrdersPathParams withAccount(String account) {
        this.account = account;
        return this;
    }
}