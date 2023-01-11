package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveUserFromAccountPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public RemoveUserFromAccountPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
}