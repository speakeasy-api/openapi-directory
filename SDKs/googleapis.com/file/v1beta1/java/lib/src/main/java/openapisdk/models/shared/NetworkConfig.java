package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NetworkConfig
 * Network configuration for the instance.
**/
public class NetworkConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connectMode")
    public NetworkConfigConnectModeEnum connectMode;
    public NetworkConfig withConnectMode(NetworkConfigConnectModeEnum connectMode) {
        this.connectMode = connectMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipAddresses")
    public String[] ipAddresses;
    public NetworkConfig withIpAddresses(String[] ipAddresses) {
        this.ipAddresses = ipAddresses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("modes")
    public NetworkConfigModesEnum[] modes;
    public NetworkConfig withModes(NetworkConfigModesEnum[] modes) {
        this.modes = modes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("network")
    public String network;
    public NetworkConfig withNetwork(String network) {
        this.network = network;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reservedIpRange")
    public String reservedIpRange;
    public NetworkConfig withReservedIpRange(String reservedIpRange) {
        this.reservedIpRange = reservedIpRange;
        return this;
    }
}