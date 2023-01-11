package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * WebhookEventResource
 * Provides the event data used in asynchronous webhook event callbacks to
 * subscribed endpoints. Webhooks events have defined `eventType`s and may
 * optionally relate to other resources within the Up API.
 * 
**/
public class WebhookEventResource {
    @JsonProperty("attributes")
    public WebhookEventResourceAttributes attributes;
    public WebhookEventResource withAttributes(WebhookEventResourceAttributes attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public WebhookEventResource withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("relationships")
    public WebhookEventResourceRelationships relationships;
    public WebhookEventResource withRelationships(WebhookEventResourceRelationships relationships) {
        this.relationships = relationships;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public WebhookEventResource withType(String type) {
        this.type = type;
        return this;
    }
}