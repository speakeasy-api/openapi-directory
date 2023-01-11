package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchConversationMessagePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ConversationSid")
    public String conversationSid;
    public FetchConversationMessagePathParams withConversationSid(String conversationSid) {
        this.conversationSid = conversationSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchConversationMessagePathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}