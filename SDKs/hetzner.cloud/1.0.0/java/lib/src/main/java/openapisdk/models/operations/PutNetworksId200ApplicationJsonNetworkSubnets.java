package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutNetworksId200ApplicationJsonNetworkSubnets {
    @JsonProperty("gateway")
    public String gateway;
    public PutNetworksId200ApplicationJsonNetworkSubnets withGateway(String gateway) {
        this.gateway = gateway;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ip_range")
    public String ipRange;
    public PutNetworksId200ApplicationJsonNetworkSubnets withIpRange(String ipRange) {
        this.ipRange = ipRange;
        return this;
    }
    @JsonProperty("network_zone")
    public String networkZone;
    public PutNetworksId200ApplicationJsonNetworkSubnets withNetworkZone(String networkZone) {
        this.networkZone = networkZone;
        return this;
    }
    @JsonProperty("type")
    public PutNetworksId200ApplicationJsonNetworkSubnetsTypeEnum type;
    public PutNetworksId200ApplicationJsonNetworkSubnets withType(PutNetworksId200ApplicationJsonNetworkSubnetsTypeEnum type) {
        this.type = type;
        return this;
    }
}