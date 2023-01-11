package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Voice
 * The Nexmo product that you access with this application.
**/
public class Voice {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webhooks")
    public VoiceWebhooks[] webhooks;
    public Voice withWebhooks(VoiceWebhooks[] webhooks) {
        this.webhooks = webhooks;
        return this;
    }
}