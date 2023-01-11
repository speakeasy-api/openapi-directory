package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WebhookEventResourceRelationships {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transaction")
    public WebhookEventResourceRelationshipsTransaction transaction;
    public WebhookEventResourceRelationships withTransaction(WebhookEventResourceRelationshipsTransaction transaction) {
        this.transaction = transaction;
        return this;
    }
    @JsonProperty("webhook")
    public WebhookEventResourceRelationshipsWebhook webhook;
    public WebhookEventResourceRelationships withWebhook(WebhookEventResourceRelationshipsWebhook webhook) {
        this.webhook = webhook;
        return this;
    }
}