package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CreateWebhookRequestBody
 * A create webhook request body
**/
public class CreateWebhookRequestBody {
    @JsonProperty("event")
    public WebhookEventEnum event;
    public CreateWebhookRequestBody withEvent(WebhookEventEnum event) {
        this.event = event;
        return this;
    }
    @JsonProperty("url")
    public java.util.Map<String, Object> url;
    public CreateWebhookRequestBody withUrl(java.util.Map<String, Object> url) {
        this.url = url;
        return this;
    }
}