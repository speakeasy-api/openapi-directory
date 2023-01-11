package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NetworkAddress
 * A network.
**/
public class NetworkAddress {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public String address;
    public NetworkAddress withAddress(String address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("existingNetworkId")
    public String existingNetworkId;
    public NetworkAddress withExistingNetworkId(String existingNetworkId) {
        this.existingNetworkId = existingNetworkId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkId")
    public String networkId;
    public NetworkAddress withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}