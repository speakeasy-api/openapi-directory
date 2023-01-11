package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NetworkConfig
 * Network related configurations.
**/
public class NetworkConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canIpForward")
    public Boolean canIpForward;
    public NetworkConfig withCanIpForward(Boolean canIpForward) {
        this.canIpForward = canIpForward;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableExternalIps")
    public Boolean enableExternalIps;
    public NetworkConfig withEnableExternalIps(Boolean enableExternalIps) {
        this.enableExternalIps = enableExternalIps;
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
    @JsonProperty("subnetwork")
    public String subnetwork;
    public NetworkConfig withSubnetwork(String subnetwork) {
        this.subnetwork = subnetwork;
        return this;
    }
}