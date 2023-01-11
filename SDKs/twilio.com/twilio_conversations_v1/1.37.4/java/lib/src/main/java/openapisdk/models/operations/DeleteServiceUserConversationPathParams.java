package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteServiceUserConversationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ChatServiceSid")
    public String chatServiceSid;
    public DeleteServiceUserConversationPathParams withChatServiceSid(String chatServiceSid) {
        this.chatServiceSid = chatServiceSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ConversationSid")
    public String conversationSid;
    public DeleteServiceUserConversationPathParams withConversationSid(String conversationSid) {
        this.conversationSid = conversationSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=UserSid")
    public String userSid;
    public DeleteServiceUserConversationPathParams withUserSid(String userSid) {
        this.userSid = userSid;
        return this;
    }
}