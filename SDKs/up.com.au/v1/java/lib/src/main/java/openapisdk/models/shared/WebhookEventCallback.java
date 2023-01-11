package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * WebhookEventCallback
 * Asynchronous callback request used for webhook event delivery.
 * 
**/
public class WebhookEventCallback {
    @JsonProperty("data")
    public WebhookEventResource data;
    public WebhookEventCallback withData(WebhookEventResource data) {
        this.data = data;
        return this;
    }
}