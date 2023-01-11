package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MessagesCapability
 * Messages / Dispatch related configuration
**/
public class MessagesCapability {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public MessagesCapability withVersion(String version) {
        this.version = version;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webhooks")
    public MessagesCapabilityWebhooks webhooks;
    public MessagesCapability withWebhooks(MessagesCapabilityWebhooks webhooks) {
        this.webhooks = webhooks;
        return this;
    }
}