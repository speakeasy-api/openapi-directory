package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateConversationMessagePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ConversationSid")
    public String conversationSid;
    public UpdateConversationMessagePathParams withConversationSid(String conversationSid) {
        this.conversationSid = conversationSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public UpdateConversationMessagePathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}