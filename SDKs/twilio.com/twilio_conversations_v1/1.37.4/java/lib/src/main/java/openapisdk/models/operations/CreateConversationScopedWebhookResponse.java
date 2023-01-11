package openapisdk.models.operations;



public class CreateConversationScopedWebhookResponse {
    public String contentType;
    public CreateConversationScopedWebhookResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateConversationScopedWebhookResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ConversationsV1ConversationConversationScopedWebhook conversationsV1ConversationConversationScopedWebhook;
    public CreateConversationScopedWebhookResponse withConversationsV1ConversationConversationScopedWebhook(openapisdk.models.shared.ConversationsV1ConversationConversationScopedWebhook conversationsV1ConversationConversationScopedWebhook) {
        this.conversationsV1ConversationConversationScopedWebhook = conversationsV1ConversationConversationScopedWebhook;
        return this;
    }
}