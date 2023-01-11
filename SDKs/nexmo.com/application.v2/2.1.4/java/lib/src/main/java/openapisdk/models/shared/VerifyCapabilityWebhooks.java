package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class VerifyCapabilityWebhooks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status_url")
    public VerifyCapabilityWebhooksStatusUrl statusUrl;
    public VerifyCapabilityWebhooks withStatusUrl(VerifyCapabilityWebhooksStatusUrl statusUrl) {
        this.statusUrl = statusUrl;
        return this;
    }
}