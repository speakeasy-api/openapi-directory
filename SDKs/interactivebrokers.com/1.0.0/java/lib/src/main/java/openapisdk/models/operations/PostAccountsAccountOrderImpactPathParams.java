package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAccountsAccountOrderImpactPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=account")
    public String account;
    public PostAccountsAccountOrderImpactPathParams withAccount(String account) {
        this.account = account;
        return this;
    }
}