package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchConversationScopedWebhookPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ConversationSid")
    public String conversationSid;
    public FetchConversationScopedWebhookPathParams withConversationSid(String conversationSid) {
        this.conversationSid = conversationSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchConversationScopedWebhookPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}