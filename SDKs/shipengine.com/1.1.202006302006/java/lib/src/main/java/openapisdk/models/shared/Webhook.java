package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Webhook
 * A webhook
**/
public class Webhook {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("event")
    public WebhookEventEnum event;
    public Webhook withEvent(WebhookEventEnum event) {
        this.event = event;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public java.util.Map<String, Object> url;
    public Webhook withUrl(java.util.Map<String, Object> url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webhook_id")
    public java.util.Map<String, Object> webhookId;
    public Webhook withWebhookId(java.util.Map<String, Object> webhookId) {
        this.webhookId = webhookId;
        return this;
    }
}