package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetNetworks200ApplicationJsonNetworksSubnets {
    @JsonProperty("gateway")
    public String gateway;
    public GetNetworks200ApplicationJsonNetworksSubnets withGateway(String gateway) {
        this.gateway = gateway;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ip_range")
    public String ipRange;
    public GetNetworks200ApplicationJsonNetworksSubnets withIpRange(String ipRange) {
        this.ipRange = ipRange;
        return this;
    }
    @JsonProperty("network_zone")
    public String networkZone;
    public GetNetworks200ApplicationJsonNetworksSubnets withNetworkZone(String networkZone) {
        this.networkZone = networkZone;
        return this;
    }
    @JsonProperty("type")
    public GetNetworks200ApplicationJsonNetworksSubnetsTypeEnum type;
    public GetNetworks200ApplicationJsonNetworksSubnets withType(GetNetworks200ApplicationJsonNetworksSubnetsTypeEnum type) {
        this.type = type;
        return this;
    }
}