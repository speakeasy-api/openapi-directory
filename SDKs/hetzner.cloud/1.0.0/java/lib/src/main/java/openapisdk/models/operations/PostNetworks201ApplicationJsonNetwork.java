package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostNetworks201ApplicationJsonNetwork {
    @JsonProperty("created")
    public String created;
    public PostNetworks201ApplicationJsonNetwork withCreated(String created) {
        this.created = created;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PostNetworks201ApplicationJsonNetwork withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("ip_range")
    public String ipRange;
    public PostNetworks201ApplicationJsonNetwork withIpRange(String ipRange) {
        this.ipRange = ipRange;
        return this;
    }
    @JsonProperty("labels")
    public java.util.Map<String, Object> labels;
    public PostNetworks201ApplicationJsonNetwork withLabels(java.util.Map<String, Object> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("load_balancers")
    public Long[] loadBalancers;
    public PostNetworks201ApplicationJsonNetwork withLoadBalancers(Long[] loadBalancers) {
        this.loadBalancers = loadBalancers;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PostNetworks201ApplicationJsonNetwork withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("protection")
    public PostNetworks201ApplicationJsonNetworkProtection protection;
    public PostNetworks201ApplicationJsonNetwork withProtection(PostNetworks201ApplicationJsonNetworkProtection protection) {
        this.protection = protection;
        return this;
    }
    @JsonProperty("routes")
    public PostNetworks201ApplicationJsonNetworkRoutes[] routes;
    public PostNetworks201ApplicationJsonNetwork withRoutes(PostNetworks201ApplicationJsonNetworkRoutes[] routes) {
        this.routes = routes;
        return this;
    }
    @JsonProperty("servers")
    public Long[] servers;
    public PostNetworks201ApplicationJsonNetwork withServers(Long[] servers) {
        this.servers = servers;
        return this;
    }
    @JsonProperty("subnets")
    public PostNetworks201ApplicationJsonNetworkSubnets[] subnets;
    public PostNetworks201ApplicationJsonNetwork withSubnets(PostNetworks201ApplicationJsonNetworkSubnets[] subnets) {
        this.subnets = subnets;
        return this;
    }
}