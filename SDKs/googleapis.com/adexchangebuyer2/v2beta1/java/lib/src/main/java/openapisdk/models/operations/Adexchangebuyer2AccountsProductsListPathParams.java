package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class Adexchangebuyer2AccountsProductsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public Adexchangebuyer2AccountsProductsListPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
}