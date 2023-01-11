package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchUserConversationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ConversationSid")
    public String conversationSid;
    public FetchUserConversationPathParams withConversationSid(String conversationSid) {
        this.conversationSid = conversationSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=UserSid")
    public String userSid;
    public FetchUserConversationPathParams withUserSid(String userSid) {
        this.userSid = userSid;
        return this;
    }
}