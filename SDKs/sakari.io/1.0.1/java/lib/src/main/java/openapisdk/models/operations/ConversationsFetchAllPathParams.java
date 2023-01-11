package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConversationsFetchAllPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public ConversationsFetchAllPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
}