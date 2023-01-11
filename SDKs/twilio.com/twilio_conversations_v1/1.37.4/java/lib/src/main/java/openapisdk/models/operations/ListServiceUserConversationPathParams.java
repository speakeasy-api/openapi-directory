package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListServiceUserConversationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ChatServiceSid")
    public String chatServiceSid;
    public ListServiceUserConversationPathParams withChatServiceSid(String chatServiceSid) {
        this.chatServiceSid = chatServiceSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=UserSid")
    public String userSid;
    public ListServiceUserConversationPathParams withUserSid(String userSid) {
        this.userSid = userSid;
        return this;
    }
}