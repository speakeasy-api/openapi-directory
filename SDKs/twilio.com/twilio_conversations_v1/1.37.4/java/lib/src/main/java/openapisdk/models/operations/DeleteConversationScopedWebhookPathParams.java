package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteConversationScopedWebhookPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ConversationSid")
    public String conversationSid;
    public DeleteConversationScopedWebhookPathParams withConversationSid(String conversationSid) {
        this.conversationSid = conversationSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public DeleteConversationScopedWebhookPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}