package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WebhooksSubscribeRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventTypes")
    public String[] eventTypes;
    public WebhooksSubscribeRequestBody withEventTypes(String[] eventTypes) {
        this.eventTypes = eventTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public WebhooksSubscribeRequestBody withUrl(String url) {
        this.url = url;
        return this;
    }
}