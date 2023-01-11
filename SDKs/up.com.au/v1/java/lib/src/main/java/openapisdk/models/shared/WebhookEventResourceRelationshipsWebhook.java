package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WebhookEventResourceRelationshipsWebhook {
    @JsonProperty("data")
    public WebhookEventResourceRelationshipsWebhookData data;
    public WebhookEventResourceRelationshipsWebhook withData(WebhookEventResourceRelationshipsWebhookData data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public WebhookEventResourceRelationshipsWebhookLinks links;
    public WebhookEventResourceRelationshipsWebhook withLinks(WebhookEventResourceRelationshipsWebhookLinks links) {
        this.links = links;
        return this;
    }
}