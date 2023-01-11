package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * WebhookInputResource
 * Represents a webhook specified as request input.
 * 
**/
public class WebhookInputResource {
    @JsonProperty("attributes")
    public WebhookInputResourceAttributes attributes;
    public WebhookInputResource withAttributes(WebhookInputResourceAttributes attributes) {
        this.attributes = attributes;
        return this;
    }
}