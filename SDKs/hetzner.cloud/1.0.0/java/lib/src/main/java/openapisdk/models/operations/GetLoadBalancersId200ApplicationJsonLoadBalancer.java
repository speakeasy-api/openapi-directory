package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetLoadBalancersId200ApplicationJsonLoadBalancer {
    @JsonProperty("algorithm")
    public GetLoadBalancersId200ApplicationJsonLoadBalancerAlgorithm algorithm;
    public GetLoadBalancersId200ApplicationJsonLoadBalancer withAlgorithm(GetLoadBalancersId200ApplicationJsonLoadBalancerAlgorithm algorithm) {
        this.algorithm = algorithm;
        return this;
    }
    @JsonProperty("created")
    public String created;
    public GetLoadBalancersId200ApplicationJsonLoadBalancer withCreated(String created) {
        this.created = created;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public GetLoadBalancersId200ApplicationJsonLoadBalancer withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("included_traffic")
    public Long includedTraffic;
    public GetLoadBalancersId200ApplicationJsonLoadBalancer withIncludedTraffic(Long includedTraffic) {
        this.includedTraffic = includedTraffic;
        return this;
    }
    @JsonProperty("ingoing_traffic")
    public Long ingoingTraffic;
    public GetLoadBalancersId200ApplicationJsonLoadBalancer withIngoingTraffic(Long ingoingTraffic) {
        this.ingoingTraffic = ingoingTraffic;
        return this;
    }
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public GetLoadBalancersId200ApplicationJsonLoadBalancer withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonProperty("load_balancer_type")
    public GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerType loadBalancerType;
    public GetLoadBalancersId200ApplicationJsonLoadBalancer withLoadBalancerType(GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerType loadBalancerType) {
        this.loadBalancerType = loadBalancerType;
        return this;
    }
    @JsonProperty("location")
    public GetLoadBalancersId200ApplicationJsonLoadBalancerLocation location;
    public GetLoadBalancersId200ApplicationJsonLoadBalancer withLocation(GetLoadBalancersId200ApplicationJsonLoadBalancerLocation location) {
        this.location = location;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public GetLoadBalancersId200ApplicationJsonLoadBalancer withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("outgoing_traffic")
    public Long outgoingTraffic;
    public GetLoadBalancersId200ApplicationJsonLoadBalancer withOutgoingTraffic(Long outgoingTraffic) {
        this.outgoingTraffic = outgoingTraffic;
        return this;
    }
    @JsonProperty("private_net")
    public GetLoadBalancersId200ApplicationJsonLoadBalancerPrivateNet[] privateNet;
    public GetLoadBalancersId200ApplicationJsonLoadBalancer withPrivateNet(GetLoadBalancersId200ApplicationJsonLoadBalancerPrivateNet[] privateNet) {
        this.privateNet = privateNet;
        return this;
    }
    @JsonProperty("protection")
    public GetLoadBalancersId200ApplicationJsonLoadBalancerProtection protection;
    public GetLoadBalancersId200ApplicationJsonLoadBalancer withProtection(GetLoadBalancersId200ApplicationJsonLoadBalancerProtection protection) {
        this.protection = protection;
        return this;
    }
    @JsonProperty("public_net")
    public GetLoadBalancersId200ApplicationJsonLoadBalancerPublicNet publicNet;
    public GetLoadBalancersId200ApplicationJsonLoadBalancer withPublicNet(GetLoadBalancersId200ApplicationJsonLoadBalancerPublicNet publicNet) {
        this.publicNet = publicNet;
        return this;
    }
    @JsonProperty("services")
    public GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerService[] services;
    public GetLoadBalancersId200ApplicationJsonLoadBalancer withServices(GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerService[] services) {
        this.services = services;
        return this;
    }
    @JsonProperty("targets")
    public GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTarget[] targets;
    public GetLoadBalancersId200ApplicationJsonLoadBalancer withTargets(GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTarget[] targets) {
        this.targets = targets;
        return this;
    }
}