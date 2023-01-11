package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListWebhookListWebhookResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListWebhookListWebhookResponseMeta meta;
    public ListWebhookListWebhookResponse withMeta(ListWebhookListWebhookResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webhooks")
    public openapisdk.models.shared.VerifyV2ServiceWebhook[] webhooks;
    public ListWebhookListWebhookResponse withWebhooks(openapisdk.models.shared.VerifyV2ServiceWebhook[] webhooks) {
        this.webhooks = webhooks;
        return this;
    }
}