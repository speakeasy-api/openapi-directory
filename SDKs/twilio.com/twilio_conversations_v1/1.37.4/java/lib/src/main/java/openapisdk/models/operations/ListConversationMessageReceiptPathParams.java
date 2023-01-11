package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListConversationMessageReceiptPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ConversationSid")
    public String conversationSid;
    public ListConversationMessageReceiptPathParams withConversationSid(String conversationSid) {
        this.conversationSid = conversationSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=MessageSid")
    public String messageSid;
    public ListConversationMessageReceiptPathParams withMessageSid(String messageSid) {
        this.messageSid = messageSid;
        return this;
    }
}