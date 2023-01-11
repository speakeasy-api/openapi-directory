package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetNetworksId200ApplicationJsonNetworkSubnets {
    @JsonProperty("gateway")
    public String gateway;
    public GetNetworksId200ApplicationJsonNetworkSubnets withGateway(String gateway) {
        this.gateway = gateway;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ip_range")
    public String ipRange;
    public GetNetworksId200ApplicationJsonNetworkSubnets withIpRange(String ipRange) {
        this.ipRange = ipRange;
        return this;
    }
    @JsonProperty("network_zone")
    public String networkZone;
    public GetNetworksId200ApplicationJsonNetworkSubnets withNetworkZone(String networkZone) {
        this.networkZone = networkZone;
        return this;
    }
    @JsonProperty("type")
    public GetNetworksId200ApplicationJsonNetworkSubnetsTypeEnum type;
    public GetNetworksId200ApplicationJsonNetworkSubnets withType(GetNetworksId200ApplicationJsonNetworkSubnetsTypeEnum type) {
        this.type = type;
        return this;
    }
}