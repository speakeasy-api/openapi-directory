package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchServiceUserConversationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ChatServiceSid")
    public String chatServiceSid;
    public FetchServiceUserConversationPathParams withChatServiceSid(String chatServiceSid) {
        this.chatServiceSid = chatServiceSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ConversationSid")
    public String conversationSid;
    public FetchServiceUserConversationPathParams withConversationSid(String conversationSid) {
        this.conversationSid = conversationSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=UserSid")
    public String userSid;
    public FetchServiceUserConversationPathParams withUserSid(String userSid) {
        this.userSid = userSid;
        return this;
    }
}