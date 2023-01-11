package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class VoiceCapabilityPaymentsGateways {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("credential")
    public String credential;
    public VoiceCapabilityPaymentsGateways withCredential(String credential) {
        this.credential = credential;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mode")
    public VoiceCapabilityPaymentsGatewaysModeEnum mode;
    public VoiceCapabilityPaymentsGateways withMode(VoiceCapabilityPaymentsGatewaysModeEnum mode) {
        this.mode = mode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public VoiceCapabilityPaymentsGateways withType(String type) {
        this.type = type;
        return this;
    }
}