package openapisdk.models.operations;



public class CreateServiceConversationScopedWebhookResponse {
    public String contentType;
    public CreateServiceConversationScopedWebhookResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateServiceConversationScopedWebhookResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook conversationsV1ServiceServiceConversationServiceConversationScopedWebhook;
    public CreateServiceConversationScopedWebhookResponse withConversationsV1ServiceServiceConversationServiceConversationScopedWebhook(openapisdk.models.shared.ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook conversationsV1ServiceServiceConversationServiceConversationScopedWebhook) {
        this.conversationsV1ServiceServiceConversationServiceConversationScopedWebhook = conversationsV1ServiceServiceConversationServiceConversationScopedWebhook;
        return this;
    }
}