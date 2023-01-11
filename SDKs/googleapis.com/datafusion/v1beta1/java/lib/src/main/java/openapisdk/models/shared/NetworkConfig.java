package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NetworkConfig
 * Network configuration for a Data Fusion instance. These configurations are used for peering with the customer network. Configurations are optional when a public Data Fusion instance is to be created. However, providing these configurations allows several benefits, such as reduced network latency while accessing the customer resources from managed Data Fusion instance nodes, as well as access to the customer on-prem resources.
**/
public class NetworkConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipAllocation")
    public String ipAllocation;
    public NetworkConfig withIpAllocation(String ipAllocation) {
        this.ipAllocation = ipAllocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("network")
    public String network;
    public NetworkConfig withNetwork(String network) {
        this.network = network;
        return this;
    }
}