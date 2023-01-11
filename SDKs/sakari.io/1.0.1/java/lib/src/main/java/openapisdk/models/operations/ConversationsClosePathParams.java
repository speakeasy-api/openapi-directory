package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConversationsClosePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public ConversationsClosePathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=conversationId")
    public String conversationId;
    public ConversationsClosePathParams withConversationId(String conversationId) {
        this.conversationId = conversationId;
        return this;
    }
}