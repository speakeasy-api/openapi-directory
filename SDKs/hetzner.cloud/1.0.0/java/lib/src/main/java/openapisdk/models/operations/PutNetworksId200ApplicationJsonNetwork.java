package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutNetworksId200ApplicationJsonNetwork {
    @JsonProperty("created")
    public String created;
    public PutNetworksId200ApplicationJsonNetwork withCreated(String created) {
        this.created = created;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PutNetworksId200ApplicationJsonNetwork withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("ip_range")
    public String ipRange;
    public PutNetworksId200ApplicationJsonNetwork withIpRange(String ipRange) {
        this.ipRange = ipRange;
        return this;
    }
    @JsonProperty("labels")
    public java.util.Map<String, Object> labels;
    public PutNetworksId200ApplicationJsonNetwork withLabels(java.util.Map<String, Object> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("load_balancers")
    public Long[] loadBalancers;
    public PutNetworksId200ApplicationJsonNetwork withLoadBalancers(Long[] loadBalancers) {
        this.loadBalancers = loadBalancers;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PutNetworksId200ApplicationJsonNetwork withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("protection")
    public PutNetworksId200ApplicationJsonNetworkProtection protection;
    public PutNetworksId200ApplicationJsonNetwork withProtection(PutNetworksId200ApplicationJsonNetworkProtection protection) {
        this.protection = protection;
        return this;
    }
    @JsonProperty("routes")
    public PutNetworksId200ApplicationJsonNetworkRoutes[] routes;
    public PutNetworksId200ApplicationJsonNetwork withRoutes(PutNetworksId200ApplicationJsonNetworkRoutes[] routes) {
        this.routes = routes;
        return this;
    }
    @JsonProperty("servers")
    public Long[] servers;
    public PutNetworksId200ApplicationJsonNetwork withServers(Long[] servers) {
        this.servers = servers;
        return this;
    }
    @JsonProperty("subnets")
    public PutNetworksId200ApplicationJsonNetworkSubnets[] subnets;
    public PutNetworksId200ApplicationJsonNetwork withSubnets(PutNetworksId200ApplicationJsonNetworkSubnets[] subnets) {
        this.subnets = subnets;
        return this;
    }
}