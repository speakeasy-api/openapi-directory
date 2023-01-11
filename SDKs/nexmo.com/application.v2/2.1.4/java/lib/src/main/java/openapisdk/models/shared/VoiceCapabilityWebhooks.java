package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class VoiceCapabilityWebhooks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("answer_url")
    public VoiceCapabilityWebhooksAnswerUrl answerUrl;
    public VoiceCapabilityWebhooks withAnswerUrl(VoiceCapabilityWebhooksAnswerUrl answerUrl) {
        this.answerUrl = answerUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("event_url")
    public VoiceCapabilityWebhooksEventUrl eventUrl;
    public VoiceCapabilityWebhooks withEventUrl(VoiceCapabilityWebhooksEventUrl eventUrl) {
        this.eventUrl = eventUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fallback_answer_url")
    public VoiceCapabilityWebhooksFallbackAnswerUrl fallbackAnswerUrl;
    public VoiceCapabilityWebhooks withFallbackAnswerUrl(VoiceCapabilityWebhooksFallbackAnswerUrl fallbackAnswerUrl) {
        this.fallbackAnswerUrl = fallbackAnswerUrl;
        return this;
    }
}