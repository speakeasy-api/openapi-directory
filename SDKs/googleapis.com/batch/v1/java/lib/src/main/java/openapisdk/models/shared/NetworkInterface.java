package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NetworkInterface
 * A network interface.
**/
public class NetworkInterface {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("network")
    public String network;
    public NetworkInterface withNetwork(String network) {
        this.network = network;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("noExternalIpAddress")
    public Boolean noExternalIpAddress;
    public NetworkInterface withNoExternalIpAddress(Boolean noExternalIpAddress) {
        this.noExternalIpAddress = noExternalIpAddress;
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