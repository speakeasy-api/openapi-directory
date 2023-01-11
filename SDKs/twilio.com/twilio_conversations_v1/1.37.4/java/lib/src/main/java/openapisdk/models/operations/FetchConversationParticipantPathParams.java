package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchConversationParticipantPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ConversationSid")
    public String conversationSid;
    public FetchConversationParticipantPathParams withConversationSid(String conversationSid) {
        this.conversationSid = conversationSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchConversationParticipantPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}