package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MessagesSendPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public MessagesSendPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
}