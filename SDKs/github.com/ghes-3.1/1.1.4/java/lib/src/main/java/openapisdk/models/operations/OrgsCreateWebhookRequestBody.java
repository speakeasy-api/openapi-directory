package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OrgsCreateWebhookRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Boolean active;
    public OrgsCreateWebhookRequestBody withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonProperty("config")
    public OrgsCreateWebhookRequestBodyConfig config;
    public OrgsCreateWebhookRequestBody withConfig(OrgsCreateWebhookRequestBodyConfig config) {
        this.config = config;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("events")
    public String[] events;
    public OrgsCreateWebhookRequestBody withEvents(String[] events) {
        this.events = events;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public OrgsCreateWebhookRequestBody withName(String name) {
        this.name = name;
        return this;
    }
}