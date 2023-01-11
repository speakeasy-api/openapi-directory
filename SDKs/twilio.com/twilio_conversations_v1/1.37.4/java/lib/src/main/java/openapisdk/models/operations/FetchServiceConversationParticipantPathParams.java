package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchServiceConversationParticipantPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ChatServiceSid")
    public String chatServiceSid;
    public FetchServiceConversationParticipantPathParams withChatServiceSid(String chatServiceSid) {
        this.chatServiceSid = chatServiceSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ConversationSid")
    public String conversationSid;
    public FetchServiceConversationParticipantPathParams withConversationSid(String conversationSid) {
        this.conversationSid = conversationSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchServiceConversationParticipantPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}