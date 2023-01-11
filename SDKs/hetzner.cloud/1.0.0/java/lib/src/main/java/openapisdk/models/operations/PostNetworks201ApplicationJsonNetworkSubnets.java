package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostNetworks201ApplicationJsonNetworkSubnets {
    @JsonProperty("gateway")
    public String gateway;
    public PostNetworks201ApplicationJsonNetworkSubnets withGateway(String gateway) {
        this.gateway = gateway;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ip_range")
    public String ipRange;
    public PostNetworks201ApplicationJsonNetworkSubnets withIpRange(String ipRange) {
        this.ipRange = ipRange;
        return this;
    }
    @JsonProperty("network_zone")
    public String networkZone;
    public PostNetworks201ApplicationJsonNetworkSubnets withNetworkZone(String networkZone) {
        this.networkZone = networkZone;
        return this;
    }
    @JsonProperty("type")
    public PostNetworks201ApplicationJsonNetworkSubnetsTypeEnum type;
    public PostNetworks201ApplicationJsonNetworkSubnets withType(PostNetworks201ApplicationJsonNetworkSubnetsTypeEnum type) {
        this.type = type;
        return this;
    }
}