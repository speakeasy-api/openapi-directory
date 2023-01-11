package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteConversationParticipantPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ConversationSid")
    public String conversationSid;
    public DeleteConversationParticipantPathParams withConversationSid(String conversationSid) {
        this.conversationSid = conversationSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public DeleteConversationParticipantPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}