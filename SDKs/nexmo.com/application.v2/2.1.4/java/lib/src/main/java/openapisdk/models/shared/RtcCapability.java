package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RtcCapability
 * RTC / Conversation Service related configuration
**/
public class RtcCapability {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("leg_persistence_time")
    public Integer legPersistenceTime;
    public RtcCapability withLegPersistenceTime(Integer legPersistenceTime) {
        this.legPersistenceTime = legPersistenceTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("signed_callbacks")
    public Boolean signedCallbacks;
    public RtcCapability withSignedCallbacks(Boolean signedCallbacks) {
        this.signedCallbacks = signedCallbacks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webhooks")
    public RtcCapabilityWebhooks webhooks;
    public RtcCapability withWebhooks(RtcCapabilityWebhooks webhooks) {
        this.webhooks = webhooks;
        return this;
    }
}