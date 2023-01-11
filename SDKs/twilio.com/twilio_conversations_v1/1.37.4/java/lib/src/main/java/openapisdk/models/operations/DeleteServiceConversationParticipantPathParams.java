package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteServiceConversationParticipantPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ChatServiceSid")
    public String chatServiceSid;
    public DeleteServiceConversationParticipantPathParams withChatServiceSid(String chatServiceSid) {
        this.chatServiceSid = chatServiceSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ConversationSid")
    public String conversationSid;
    public DeleteServiceConversationParticipantPathParams withConversationSid(String conversationSid) {
        this.conversationSid = conversationSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public DeleteServiceConversationParticipantPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}