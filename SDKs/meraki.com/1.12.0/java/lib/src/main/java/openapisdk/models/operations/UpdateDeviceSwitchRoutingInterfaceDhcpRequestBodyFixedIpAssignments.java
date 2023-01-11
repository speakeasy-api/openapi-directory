package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIpAssignments {
    @JsonProperty("ip")
    public String ip;
    public UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIpAssignments withIp(String ip) {
        this.ip = ip;
        return this;
    }
    @JsonProperty("mac")
    public String mac;
    public UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIpAssignments withMac(String mac) {
        this.mac = mac;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIpAssignments withName(String name) {
        this.name = name;
        return this;
    }
}