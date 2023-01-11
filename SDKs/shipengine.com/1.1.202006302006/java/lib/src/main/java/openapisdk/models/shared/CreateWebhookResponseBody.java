package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CreateWebhookResponseBody
 * A webhook
**/
public class CreateWebhookResponseBody {
    @JsonProperty("event")
    public WebhookEventEnum event;
    public CreateWebhookResponseBody withEvent(WebhookEventEnum event) {
        this.event = event;
        return this;
    }
    @JsonProperty("url")
    public java.util.Map<String, Object> url;
    public CreateWebhookResponseBody withUrl(java.util.Map<String, Object> url) {
        this.url = url;
        return this;
    }
    @JsonProperty("webhook_id")
    public java.util.Map<String, Object> webhookId;
    public CreateWebhookResponseBody withWebhookId(java.util.Map<String, Object> webhookId) {
        this.webhookId = webhookId;
        return this;
    }
}