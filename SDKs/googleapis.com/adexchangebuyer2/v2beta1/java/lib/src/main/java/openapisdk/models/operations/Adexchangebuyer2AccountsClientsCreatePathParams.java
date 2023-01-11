package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class Adexchangebuyer2AccountsClientsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public Adexchangebuyer2AccountsClientsCreatePathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
}