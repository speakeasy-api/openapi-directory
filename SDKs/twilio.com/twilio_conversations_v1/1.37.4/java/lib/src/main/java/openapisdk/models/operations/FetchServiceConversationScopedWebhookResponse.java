package openapisdk.models.operations;



public class FetchServiceConversationScopedWebhookResponse {
    public String contentType;
    public FetchServiceConversationScopedWebhookResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchServiceConversationScopedWebhookResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook conversationsV1ServiceServiceConversationServiceConversationScopedWebhook;
    public FetchServiceConversationScopedWebhookResponse withConversationsV1ServiceServiceConversationServiceConversationScopedWebhook(openapisdk.models.shared.ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook conversationsV1ServiceServiceConversationServiceConversationScopedWebhook) {
        this.conversationsV1ServiceServiceConversationServiceConversationScopedWebhook = conversationsV1ServiceServiceConversationServiceConversationScopedWebhook;
        return this;
    }
}