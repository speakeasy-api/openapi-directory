package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetNetworksId200ApplicationJsonNetwork {
    @JsonProperty("created")
    public String created;
    public GetNetworksId200ApplicationJsonNetwork withCreated(String created) {
        this.created = created;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public GetNetworksId200ApplicationJsonNetwork withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("ip_range")
    public String ipRange;
    public GetNetworksId200ApplicationJsonNetwork withIpRange(String ipRange) {
        this.ipRange = ipRange;
        return this;
    }
    @JsonProperty("labels")
    public java.util.Map<String, Object> labels;
    public GetNetworksId200ApplicationJsonNetwork withLabels(java.util.Map<String, Object> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("load_balancers")
    public Long[] loadBalancers;
    public GetNetworksId200ApplicationJsonNetwork withLoadBalancers(Long[] loadBalancers) {
        this.loadBalancers = loadBalancers;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public GetNetworksId200ApplicationJsonNetwork withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("protection")
    public GetNetworksId200ApplicationJsonNetworkProtection protection;
    public GetNetworksId200ApplicationJsonNetwork withProtection(GetNetworksId200ApplicationJsonNetworkProtection protection) {
        this.protection = protection;
        return this;
    }
    @JsonProperty("routes")
    public GetNetworksId200ApplicationJsonNetworkRoutes[] routes;
    public GetNetworksId200ApplicationJsonNetwork withRoutes(GetNetworksId200ApplicationJsonNetworkRoutes[] routes) {
        this.routes = routes;
        return this;
    }
    @JsonProperty("servers")
    public Long[] servers;
    public GetNetworksId200ApplicationJsonNetwork withServers(Long[] servers) {
        this.servers = servers;
        return this;
    }
    @JsonProperty("subnets")
    public GetNetworksId200ApplicationJsonNetworkSubnets[] subnets;
    public GetNetworksId200ApplicationJsonNetwork withSubnets(GetNetworksId200ApplicationJsonNetworkSubnets[] subnets) {
        this.subnets = subnets;
        return this;
    }
}