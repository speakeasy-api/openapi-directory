package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NetworkUsage
 * Network with all used IP addresses.
**/
public class NetworkUsage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("network")
    public Network network;
    public NetworkUsage withNetwork(Network network) {
        this.network = network;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usedIps")
    public String[] usedIps;
    public NetworkUsage withUsedIps(String[] usedIps) {
        this.usedIps = usedIps;
        return this;
    }
}