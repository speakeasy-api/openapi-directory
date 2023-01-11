package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * WebhookDeliveryLogResource
 * Provides historical webhook event delivery information for analysis and
 * debugging purposes.
 * 
**/
public class WebhookDeliveryLogResource {
    @JsonProperty("attributes")
    public WebhookDeliveryLogResourceAttributes attributes;
    public WebhookDeliveryLogResource withAttributes(WebhookDeliveryLogResourceAttributes attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public WebhookDeliveryLogResource withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("relationships")
    public WebhookDeliveryLogResourceRelationships relationships;
    public WebhookDeliveryLogResource withRelationships(WebhookDeliveryLogResourceRelationships relationships) {
        this.relationships = relationships;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public WebhookDeliveryLogResource withType(String type) {
        this.type = type;
        return this;
    }
}