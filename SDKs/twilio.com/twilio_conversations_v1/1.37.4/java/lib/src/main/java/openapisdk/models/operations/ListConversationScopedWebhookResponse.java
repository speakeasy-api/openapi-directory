package openapisdk.models.operations;



public class ListConversationScopedWebhookResponse {
    public String contentType;
    public ListConversationScopedWebhookResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListConversationScopedWebhookListConversationScopedWebhookResponse listConversationScopedWebhookResponse;
    public ListConversationScopedWebhookResponse withListConversationScopedWebhookResponse(ListConversationScopedWebhookListConversationScopedWebhookResponse listConversationScopedWebhookResponse) {
        this.listConversationScopedWebhookResponse = listConversationScopedWebhookResponse;
        return this;
    }
    public Long statusCode;
    public ListConversationScopedWebhookResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}