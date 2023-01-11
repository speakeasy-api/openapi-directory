package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Webhook {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventTypes")
    public WebhookEventTypesEnum[] eventTypes;
    public Webhook withEventTypes(WebhookEventTypesEnum[] eventTypes) {
        this.eventTypes = eventTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public Webhook withUrl(String url) {
        this.url = url;
        return this;
    }
}