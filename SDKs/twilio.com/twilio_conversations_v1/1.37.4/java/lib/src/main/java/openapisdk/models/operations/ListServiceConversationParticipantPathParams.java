package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListServiceConversationParticipantPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ChatServiceSid")
    public String chatServiceSid;
    public ListServiceConversationParticipantPathParams withChatServiceSid(String chatServiceSid) {
        this.chatServiceSid = chatServiceSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ConversationSid")
    public String conversationSid;
    public ListServiceConversationParticipantPathParams withConversationSid(String conversationSid) {
        this.conversationSid = conversationSid;
        return this;
    }
}