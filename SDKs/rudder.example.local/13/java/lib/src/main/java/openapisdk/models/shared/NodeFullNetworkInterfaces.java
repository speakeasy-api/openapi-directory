package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class NodeFullNetworkInterfaces {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dhcpServer")
    public String dhcpServer;
    public NodeFullNetworkInterfaces withDhcpServer(String dhcpServer) {
        this.dhcpServer = dhcpServer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipAddresses")
    public String[] ipAddresses;
    public NodeFullNetworkInterfaces withIpAddresses(String[] ipAddresses) {
        this.ipAddresses = ipAddresses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("macAddress")
    public String macAddress;
    public NodeFullNetworkInterfaces withMacAddress(String macAddress) {
        this.macAddress = macAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mask")
    public String[] mask;
    public NodeFullNetworkInterfaces withMask(String[] mask) {
        this.mask = mask;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public NodeFullNetworkInterfaces withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("speed")
    public String speed;
    public NodeFullNetworkInterfaces withSpeed(String speed) {
        this.speed = speed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public NodeFullNetworkInterfaces withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public NodeFullNetworkInterfaces withType(String type) {
        this.type = type;
        return this;
    }
}