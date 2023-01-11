package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth
 * Critical auth settings for when authentication is rejected by the RADIUS server
**/
public class CreateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataVlanId")
    public Long dataVlanId;
    public CreateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth withDataVlanId(Long dataVlanId) {
        this.dataVlanId = dataVlanId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suspendPortBounce")
    public Boolean suspendPortBounce;
    public CreateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth withSuspendPortBounce(Boolean suspendPortBounce) {
        this.suspendPortBounce = suspendPortBounce;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voiceVlanId")
    public Long voiceVlanId;
    public CreateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth withVoiceVlanId(Long voiceVlanId) {
        this.voiceVlanId = voiceVlanId;
        return this;
    }
}