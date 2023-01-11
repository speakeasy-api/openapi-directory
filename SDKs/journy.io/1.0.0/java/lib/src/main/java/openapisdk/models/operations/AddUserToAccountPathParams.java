package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddUserToAccountPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public AddUserToAccountPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
}