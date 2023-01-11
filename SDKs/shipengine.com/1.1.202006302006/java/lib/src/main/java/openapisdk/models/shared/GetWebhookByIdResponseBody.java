package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetWebhookByIdResponseBody
 * A webhook
**/
public class GetWebhookByIdResponseBody {
    @JsonProperty("event")
    public WebhookEventEnum event;
    public GetWebhookByIdResponseBody withEvent(WebhookEventEnum event) {
        this.event = event;
        return this;
    }
    @JsonProperty("url")
    public java.util.Map<String, Object> url;
    public GetWebhookByIdResponseBody withUrl(java.util.Map<String, Object> url) {
        this.url = url;
        return this;
    }
    @JsonProperty("webhook_id")
    public java.util.Map<String, Object> webhookId;
    public GetWebhookByIdResponseBody withWebhookId(java.util.Map<String, Object> webhookId) {
        this.webhookId = webhookId;
        return this;
    }
}