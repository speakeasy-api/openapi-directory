package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkSwitchSettingsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("powerExceptions")
    public UpdateNetworkSwitchSettingsRequestBodyPowerExceptions[] powerExceptions;
    public UpdateNetworkSwitchSettingsRequestBody withPowerExceptions(UpdateNetworkSwitchSettingsRequestBodyPowerExceptions[] powerExceptions) {
        this.powerExceptions = powerExceptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("useCombinedPower")
    public Boolean useCombinedPower;
    public UpdateNetworkSwitchSettingsRequestBody withUseCombinedPower(Boolean useCombinedPower) {
        this.useCombinedPower = useCombinedPower;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vlan")
    public Long vlan;
    public UpdateNetworkSwitchSettingsRequestBody withVlan(Long vlan) {
        this.vlan = vlan;
        return this;
    }
}