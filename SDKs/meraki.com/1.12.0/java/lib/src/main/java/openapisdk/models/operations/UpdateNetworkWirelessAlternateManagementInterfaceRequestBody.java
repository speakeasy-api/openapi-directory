package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkWirelessAlternateManagementInterfaceRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessPoints")
    public UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyAccessPoints[] accessPoints;
    public UpdateNetworkWirelessAlternateManagementInterfaceRequestBody withAccessPoints(UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyAccessPoints[] accessPoints) {
        this.accessPoints = accessPoints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public UpdateNetworkWirelessAlternateManagementInterfaceRequestBody withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("protocols")
    public UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyProtocolsEnum[] protocols;
    public UpdateNetworkWirelessAlternateManagementInterfaceRequestBody withProtocols(UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyProtocolsEnum[] protocols) {
        this.protocols = protocols;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vlanId")
    public Long vlanId;
    public UpdateNetworkWirelessAlternateManagementInterfaceRequestBody withVlanId(Long vlanId) {
        this.vlanId = vlanId;
        return this;
    }
}