package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WebhookResource
 * Provides information about a webhook.
 * 
**/
public class WebhookResource {
    @JsonProperty("attributes")
    public WebhookResourceAttributes attributes;
    public WebhookResource withAttributes(WebhookResourceAttributes attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public WebhookResource withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public WebhookResourceLinks links;
    public WebhookResource withLinks(WebhookResourceLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("relationships")
    public WebhookResourceRelationships relationships;
    public WebhookResource withRelationships(WebhookResourceRelationships relationships) {
        this.relationships = relationships;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public WebhookResource withType(String type) {
        this.type = type;
        return this;
    }
}