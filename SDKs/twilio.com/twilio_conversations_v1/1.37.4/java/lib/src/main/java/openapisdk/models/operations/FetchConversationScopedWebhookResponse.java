package openapisdk.models.operations;



public class FetchConversationScopedWebhookResponse {
    public String contentType;
    public FetchConversationScopedWebhookResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchConversationScopedWebhookResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ConversationsV1ConversationConversationScopedWebhook conversationsV1ConversationConversationScopedWebhook;
    public FetchConversationScopedWebhookResponse withConversationsV1ConversationConversationScopedWebhook(openapisdk.models.shared.ConversationsV1ConversationConversationScopedWebhook conversationsV1ConversationConversationScopedWebhook) {
        this.conversationsV1ConversationConversationScopedWebhook = conversationsV1ConversationConversationScopedWebhook;
        return this;
    }
}