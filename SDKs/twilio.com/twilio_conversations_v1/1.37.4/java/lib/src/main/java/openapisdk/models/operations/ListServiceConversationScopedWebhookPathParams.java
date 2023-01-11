package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListServiceConversationScopedWebhookPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ChatServiceSid")
    public String chatServiceSid;
    public ListServiceConversationScopedWebhookPathParams withChatServiceSid(String chatServiceSid) {
        this.chatServiceSid = chatServiceSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ConversationSid")
    public String conversationSid;
    public ListServiceConversationScopedWebhookPathParams withConversationSid(String conversationSid) {
        this.conversationSid = conversationSid;
        return this;
    }
}