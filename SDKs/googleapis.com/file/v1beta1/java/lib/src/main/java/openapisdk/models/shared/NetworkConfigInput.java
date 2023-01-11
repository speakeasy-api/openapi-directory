package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NetworkConfigInput
 * Network configuration for the instance.
**/
public class NetworkConfigInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connectMode")
    public NetworkConfigConnectModeEnum connectMode;
    public NetworkConfigInput withConnectMode(NetworkConfigConnectModeEnum connectMode) {
        this.connectMode = connectMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("modes")
    public NetworkConfigModesEnum[] modes;
    public NetworkConfigInput withModes(NetworkConfigModesEnum[] modes) {
        this.modes = modes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("network")
    public String network;
    public NetworkConfigInput withNetwork(String network) {
        this.network = network;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reservedIpRange")
    public String reservedIpRange;
    public NetworkConfigInput withReservedIpRange(String reservedIpRange) {
        this.reservedIpRange = reservedIpRange;
        return this;
    }
}