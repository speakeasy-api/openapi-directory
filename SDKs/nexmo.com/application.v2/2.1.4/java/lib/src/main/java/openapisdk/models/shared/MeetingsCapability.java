package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MeetingsCapability
 * Meetings related configuration
**/
public class MeetingsCapability {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webhooks")
    public MeetingsCapabilityWebhooks webhooks;
    public MeetingsCapability withWebhooks(MeetingsCapabilityWebhooks webhooks) {
        this.webhooks = webhooks;
        return this;
    }
}