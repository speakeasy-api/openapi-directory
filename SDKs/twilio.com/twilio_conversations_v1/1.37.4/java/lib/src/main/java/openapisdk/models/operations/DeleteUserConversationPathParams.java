package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteUserConversationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ConversationSid")
    public String conversationSid;
    public DeleteUserConversationPathParams withConversationSid(String conversationSid) {
        this.conversationSid = conversationSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=UserSid")
    public String userSid;
    public DeleteUserConversationPathParams withUserSid(String userSid) {
        this.userSid = userSid;
        return this;
    }
}