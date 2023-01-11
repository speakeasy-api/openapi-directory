package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth
 * Critical auth settings for when authentication is rejected by the RADIUS server
**/
public class UpdateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataVlanId")
    public Long dataVlanId;
    public UpdateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth withDataVlanId(Long dataVlanId) {
        this.dataVlanId = dataVlanId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suspendPortBounce")
    public Boolean suspendPortBounce;
    public UpdateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth withSuspendPortBounce(Boolean suspendPortBounce) {
        this.suspendPortBounce = suspendPortBounce;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voiceVlanId")
    public Long voiceVlanId;
    public UpdateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth withVoiceVlanId(Long voiceVlanId) {
        this.voiceVlanId = voiceVlanId;
        return this;
    }
}