package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VoiceCapabilityPayments
 * encompass all the payment related fields
**/
public class VoiceCapabilityPayments {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gateways")
    public VoiceCapabilityPaymentsGateways[] gateways;
    public VoiceCapabilityPayments withGateways(VoiceCapabilityPaymentsGateways[] gateways) {
        this.gateways = gateways;
        return this;
    }
}