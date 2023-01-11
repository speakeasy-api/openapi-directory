package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkSwitchAlternateManagementInterfaceRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public UpdateNetworkSwitchAlternateManagementInterfaceRequestBody withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("protocols")
    public UpdateNetworkSwitchAlternateManagementInterfaceRequestBodyProtocolsEnum[] protocols;
    public UpdateNetworkSwitchAlternateManagementInterfaceRequestBody withProtocols(UpdateNetworkSwitchAlternateManagementInterfaceRequestBodyProtocolsEnum[] protocols) {
        this.protocols = protocols;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("switches")
    public UpdateNetworkSwitchAlternateManagementInterfaceRequestBodySwitches[] switches;
    public UpdateNetworkSwitchAlternateManagementInterfaceRequestBody withSwitches(UpdateNetworkSwitchAlternateManagementInterfaceRequestBodySwitches[] switches) {
        this.switches = switches;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vlanId")
    public Long vlanId;
    public UpdateNetworkSwitchAlternateManagementInterfaceRequestBody withVlanId(Long vlanId) {
        this.vlanId = vlanId;
        return this;
    }
}