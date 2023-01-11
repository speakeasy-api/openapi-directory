package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListChannelWebhookListChannelWebhookResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListChannelWebhookListChannelWebhookResponseMeta meta;
    public ListChannelWebhookListChannelWebhookResponse withMeta(ListChannelWebhookListChannelWebhookResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webhooks")
    public openapisdk.models.shared.ChatV2ServiceChannelChannelWebhook[] webhooks;
    public ListChannelWebhookListChannelWebhookResponse withWebhooks(openapisdk.models.shared.ChatV2ServiceChannelChannelWebhook[] webhooks) {
        this.webhooks = webhooks;
        return this;
    }
}