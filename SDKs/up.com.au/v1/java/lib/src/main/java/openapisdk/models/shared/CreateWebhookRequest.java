package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CreateWebhookRequest
 * Request to create a new webhook. This currently only requires a `url`
 * attribute.
 * 
**/
public class CreateWebhookRequest {
    @JsonProperty("data")
    public WebhookInputResource data;
    public CreateWebhookRequest withData(WebhookInputResource data) {
        this.data = data;
        return this;
    }
}