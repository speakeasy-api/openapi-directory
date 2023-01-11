package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MessagesFetchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public MessagesFetchPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=messageId")
    public String messageId;
    public MessagesFetchPathParams withMessageId(String messageId) {
        this.messageId = messageId;
        return this;
    }
}