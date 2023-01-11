package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WebhookResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public Webhook data;
    public WebhookResponse withData(Webhook data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public WebhookResponse withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}