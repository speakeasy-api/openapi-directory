package openapisdk.models.operations;



public class UpdateConversationScopedWebhookResponse {
    public String contentType;
    public UpdateConversationScopedWebhookResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateConversationScopedWebhookResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ConversationsV1ConversationConversationScopedWebhook conversationsV1ConversationConversationScopedWebhook;
    public UpdateConversationScopedWebhookResponse withConversationsV1ConversationConversationScopedWebhook(openapisdk.models.shared.ConversationsV1ConversationConversationScopedWebhook conversationsV1ConversationConversationScopedWebhook) {
        this.conversationsV1ConversationConversationScopedWebhook = conversationsV1ConversationConversationScopedWebhook;
        return this;
    }
}