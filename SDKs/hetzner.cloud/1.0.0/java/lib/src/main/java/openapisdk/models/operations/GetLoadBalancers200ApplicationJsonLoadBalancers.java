package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetLoadBalancers200ApplicationJsonLoadBalancers {
    @JsonProperty("algorithm")
    public GetLoadBalancers200ApplicationJsonLoadBalancersAlgorithm algorithm;
    public GetLoadBalancers200ApplicationJsonLoadBalancers withAlgorithm(GetLoadBalancers200ApplicationJsonLoadBalancersAlgorithm algorithm) {
        this.algorithm = algorithm;
        return this;
    }
    @JsonProperty("created")
    public String created;
    public GetLoadBalancers200ApplicationJsonLoadBalancers withCreated(String created) {
        this.created = created;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public GetLoadBalancers200ApplicationJsonLoadBalancers withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("included_traffic")
    public Long includedTraffic;
    public GetLoadBalancers200ApplicationJsonLoadBalancers withIncludedTraffic(Long includedTraffic) {
        this.includedTraffic = includedTraffic;
        return this;
    }
    @JsonProperty("ingoing_traffic")
    public Long ingoingTraffic;
    public GetLoadBalancers200ApplicationJsonLoadBalancers withIngoingTraffic(Long ingoingTraffic) {
        this.ingoingTraffic = ingoingTraffic;
        return this;
    }
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public GetLoadBalancers200ApplicationJsonLoadBalancers withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonProperty("load_balancer_type")
    public GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerType loadBalancerType;
    public GetLoadBalancers200ApplicationJsonLoadBalancers withLoadBalancerType(GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerType loadBalancerType) {
        this.loadBalancerType = loadBalancerType;
        return this;
    }
    @JsonProperty("location")
    public GetLoadBalancers200ApplicationJsonLoadBalancersLocation location;
    public GetLoadBalancers200ApplicationJsonLoadBalancers withLocation(GetLoadBalancers200ApplicationJsonLoadBalancersLocation location) {
        this.location = location;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public GetLoadBalancers200ApplicationJsonLoadBalancers withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("outgoing_traffic")
    public Long outgoingTraffic;
    public GetLoadBalancers200ApplicationJsonLoadBalancers withOutgoingTraffic(Long outgoingTraffic) {
        this.outgoingTraffic = outgoingTraffic;
        return this;
    }
    @JsonProperty("private_net")
    public GetLoadBalancers200ApplicationJsonLoadBalancersPrivateNet[] privateNet;
    public GetLoadBalancers200ApplicationJsonLoadBalancers withPrivateNet(GetLoadBalancers200ApplicationJsonLoadBalancersPrivateNet[] privateNet) {
        this.privateNet = privateNet;
        return this;
    }
    @JsonProperty("protection")
    public GetLoadBalancers200ApplicationJsonLoadBalancersProtection protection;
    public GetLoadBalancers200ApplicationJsonLoadBalancers withProtection(GetLoadBalancers200ApplicationJsonLoadBalancersProtection protection) {
        this.protection = protection;
        return this;
    }
    @JsonProperty("public_net")
    public GetLoadBalancers200ApplicationJsonLoadBalancersPublicNet publicNet;
    public GetLoadBalancers200ApplicationJsonLoadBalancers withPublicNet(GetLoadBalancers200ApplicationJsonLoadBalancersPublicNet publicNet) {
        this.publicNet = publicNet;
        return this;
    }
    @JsonProperty("services")
    public GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerService[] services;
    public GetLoadBalancers200ApplicationJsonLoadBalancers withServices(GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerService[] services) {
        this.services = services;
        return this;
    }
    @JsonProperty("targets")
    public GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTarget[] targets;
    public GetLoadBalancers200ApplicationJsonLoadBalancers withTargets(GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTarget[] targets) {
        this.targets = targets;
        return this;
    }
}