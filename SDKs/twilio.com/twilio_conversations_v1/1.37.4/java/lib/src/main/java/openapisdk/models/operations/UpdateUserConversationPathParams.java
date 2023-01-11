package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateUserConversationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ConversationSid")
    public String conversationSid;
    public UpdateUserConversationPathParams withConversationSid(String conversationSid) {
        this.conversationSid = conversationSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=UserSid")
    public String userSid;
    public UpdateUserConversationPathParams withUserSid(String userSid) {
        this.userSid = userSid;
        return this;
    }
}