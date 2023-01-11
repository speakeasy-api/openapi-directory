package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyFixedIpAssignments {
    @JsonProperty("ip")
    public String ip;
    public UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyFixedIpAssignments withIp(String ip) {
        this.ip = ip;
        return this;
    }
    @JsonProperty("mac")
    public String mac;
    public UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyFixedIpAssignments withMac(String mac) {
        this.mac = mac;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyFixedIpAssignments withName(String name) {
        this.name = name;
        return this;
    }
}