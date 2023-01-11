package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListServiceConversationScopedWebhookListServiceConversationScopedWebhookResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListServiceConversationScopedWebhookListServiceConversationScopedWebhookResponseMeta meta;
    public ListServiceConversationScopedWebhookListServiceConversationScopedWebhookResponse withMeta(ListServiceConversationScopedWebhookListServiceConversationScopedWebhookResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webhooks")
    public openapisdk.models.shared.ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook[] webhooks;
    public ListServiceConversationScopedWebhookListServiceConversationScopedWebhookResponse withWebhooks(openapisdk.models.shared.ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook[] webhooks) {
        this.webhooks = webhooks;
        return this;
    }
}