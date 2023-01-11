package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NetworkInterface
 * NetworkInterface represents a NIC of a VM.
**/
public class NetworkInterface {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("externalIp")
    public String externalIp;
    public NetworkInterface withExternalIp(String externalIp) {
        this.externalIp = externalIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("internalIp")
    public String internalIp;
    public NetworkInterface withInternalIp(String internalIp) {
        this.internalIp = internalIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("network")
    public String network;
    public NetworkInterface withNetwork(String network) {
        this.network = network;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subnetwork")
    public String subnetwork;
    public NetworkInterface withSubnetwork(String subnetwork) {
        this.subnetwork = subnetwork;
        return this;
    }
}