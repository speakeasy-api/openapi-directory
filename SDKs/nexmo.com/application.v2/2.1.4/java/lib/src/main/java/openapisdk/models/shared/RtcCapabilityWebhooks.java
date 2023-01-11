package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RtcCapabilityWebhooks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("event_url")
    public RtcCapabilityWebhooksEventUrl eventUrl;
    public RtcCapabilityWebhooks withEventUrl(RtcCapabilityWebhooksEventUrl eventUrl) {
        this.eventUrl = eventUrl;
        return this;
    }
}