package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetNetworks200ApplicationJsonNetworks {
    @JsonProperty("created")
    public String created;
    public GetNetworks200ApplicationJsonNetworks withCreated(String created) {
        this.created = created;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public GetNetworks200ApplicationJsonNetworks withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("ip_range")
    public String ipRange;
    public GetNetworks200ApplicationJsonNetworks withIpRange(String ipRange) {
        this.ipRange = ipRange;
        return this;
    }
    @JsonProperty("labels")
    public java.util.Map<String, Object> labels;
    public GetNetworks200ApplicationJsonNetworks withLabels(java.util.Map<String, Object> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("load_balancers")
    public Long[] loadBalancers;
    public GetNetworks200ApplicationJsonNetworks withLoadBalancers(Long[] loadBalancers) {
        this.loadBalancers = loadBalancers;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public GetNetworks200ApplicationJsonNetworks withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("protection")
    public GetNetworks200ApplicationJsonNetworksProtection protection;
    public GetNetworks200ApplicationJsonNetworks withProtection(GetNetworks200ApplicationJsonNetworksProtection protection) {
        this.protection = protection;
        return this;
    }
    @JsonProperty("routes")
    public GetNetworks200ApplicationJsonNetworksRoutes[] routes;
    public GetNetworks200ApplicationJsonNetworks withRoutes(GetNetworks200ApplicationJsonNetworksRoutes[] routes) {
        this.routes = routes;
        return this;
    }
    @JsonProperty("servers")
    public Long[] servers;
    public GetNetworks200ApplicationJsonNetworks withServers(Long[] servers) {
        this.servers = servers;
        return this;
    }
    @JsonProperty("subnets")
    public GetNetworks200ApplicationJsonNetworksSubnets[] subnets;
    public GetNetworks200ApplicationJsonNetworks withSubnets(GetNetworks200ApplicationJsonNetworksSubnets[] subnets) {
        this.subnets = subnets;
        return this;
    }
}