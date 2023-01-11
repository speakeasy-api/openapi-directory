package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MessagesCapabilityWebhooks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inbound_url")
    public MessagesCapabilityWebhooksInboundUrl inboundUrl;
    public MessagesCapabilityWebhooks withInboundUrl(MessagesCapabilityWebhooksInboundUrl inboundUrl) {
        this.inboundUrl = inboundUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status_url")
    public MessagesCapabilityWebhooksStatusUrl statusUrl;
    public MessagesCapabilityWebhooks withStatusUrl(MessagesCapabilityWebhooksStatusUrl statusUrl) {
        this.statusUrl = statusUrl;
        return this;
    }
}