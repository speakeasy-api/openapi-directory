package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyAccessPoints {
    @JsonProperty("alternateManagementIp")
    public String alternateManagementIp;
    public UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyAccessPoints withAlternateManagementIp(String alternateManagementIp) {
        this.alternateManagementIp = alternateManagementIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dns1")
    public String dns1;
    public UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyAccessPoints withDns1(String dns1) {
        this.dns1 = dns1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dns2")
    public String dns2;
    public UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyAccessPoints withDns2(String dns2) {
        this.dns2 = dns2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gateway")
    public String gateway;
    public UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyAccessPoints withGateway(String gateway) {
        this.gateway = gateway;
        return this;
    }
    @JsonProperty("serial")
    public String serial;
    public UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyAccessPoints withSerial(String serial) {
        this.serial = serial;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subnetMask")
    public String subnetMask;
    public UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyAccessPoints withSubnetMask(String subnetMask) {
        this.subnetMask = subnetMask;
        return this;
    }
}