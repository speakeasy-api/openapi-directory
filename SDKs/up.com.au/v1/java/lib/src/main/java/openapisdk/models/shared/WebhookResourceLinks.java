package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class WebhookResourceLinks {
    @JsonProperty("self")
    public String self;
    public WebhookResourceLinks withSelf(String self) {
        this.self = self;
        return this;
    }
}