package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListConversationScopedWebhookListConversationScopedWebhookResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListConversationScopedWebhookListConversationScopedWebhookResponseMeta meta;
    public ListConversationScopedWebhookListConversationScopedWebhookResponse withMeta(ListConversationScopedWebhookListConversationScopedWebhookResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webhooks")
    public openapisdk.models.shared.ConversationsV1ConversationConversationScopedWebhook[] webhooks;
    public ListConversationScopedWebhookListConversationScopedWebhookResponse withWebhooks(openapisdk.models.shared.ConversationsV1ConversationConversationScopedWebhook[] webhooks) {
        this.webhooks = webhooks;
        return this;
    }
}