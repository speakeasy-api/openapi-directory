package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VoiceCapability
 * Voice related configuration
**/
public class VoiceCapability {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conversation_ttl")
    public Long conversationTtl;
    public VoiceCapability withConversationTtl(Long conversationTtl) {
        this.conversationTtl = conversationTtl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payments")
    public VoiceCapabilityPayments payments;
    public VoiceCapability withPayments(VoiceCapabilityPayments payments) {
        this.payments = payments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("signed_callbacks")
    public Boolean signedCallbacks;
    public VoiceCapability withSignedCallbacks(Boolean signedCallbacks) {
        this.signedCallbacks = signedCallbacks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webhooks")
    public VoiceCapabilityWebhooks webhooks;
    public VoiceCapability withWebhooks(VoiceCapabilityWebhooks webhooks) {
        this.webhooks = webhooks;
        return this;
    }
}