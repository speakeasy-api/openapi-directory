package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PingResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public PingResponse withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webhookId")
    public String webhookId;
    public PingResponse withWebhookId(String webhookId) {
        this.webhookId = webhookId;
        return this;
    }
}