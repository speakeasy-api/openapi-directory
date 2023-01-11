package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MessagesFetchAllPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public MessagesFetchAllPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
}