package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchServiceConversationMessagePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ChatServiceSid")
    public String chatServiceSid;
    public FetchServiceConversationMessagePathParams withChatServiceSid(String chatServiceSid) {
        this.chatServiceSid = chatServiceSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ConversationSid")
    public String conversationSid;
    public FetchServiceConversationMessagePathParams withConversationSid(String conversationSid) {
        this.conversationSid = conversationSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchServiceConversationMessagePathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}