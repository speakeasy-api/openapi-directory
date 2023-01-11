package openapisdk.models.operations;



public class UpdateServiceConversationScopedWebhookResponse {
    public String contentType;
    public UpdateServiceConversationScopedWebhookResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateServiceConversationScopedWebhookResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook conversationsV1ServiceServiceConversationServiceConversationScopedWebhook;
    public UpdateServiceConversationScopedWebhookResponse withConversationsV1ServiceServiceConversationServiceConversationScopedWebhook(openapisdk.models.shared.ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook conversationsV1ServiceServiceConversationServiceConversationScopedWebhook) {
        this.conversationsV1ServiceServiceConversationServiceConversationScopedWebhook = conversationsV1ServiceServiceConversationServiceConversationScopedWebhook;
        return this;
    }
}