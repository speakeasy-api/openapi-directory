package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchConversationMessageReceiptPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ConversationSid")
    public String conversationSid;
    public FetchConversationMessageReceiptPathParams withConversationSid(String conversationSid) {
        this.conversationSid = conversationSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=MessageSid")
    public String messageSid;
    public FetchConversationMessageReceiptPathParams withMessageSid(String messageSid) {
        this.messageSid = messageSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchConversationMessageReceiptPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}