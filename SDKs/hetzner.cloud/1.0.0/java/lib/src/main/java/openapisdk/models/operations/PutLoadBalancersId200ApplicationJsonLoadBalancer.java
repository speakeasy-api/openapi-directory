package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutLoadBalancersId200ApplicationJsonLoadBalancer {
    @JsonProperty("algorithm")
    public PutLoadBalancersId200ApplicationJsonLoadBalancerAlgorithm algorithm;
    public PutLoadBalancersId200ApplicationJsonLoadBalancer withAlgorithm(PutLoadBalancersId200ApplicationJsonLoadBalancerAlgorithm algorithm) {
        this.algorithm = algorithm;
        return this;
    }
    @JsonProperty("created")
    public String created;
    public PutLoadBalancersId200ApplicationJsonLoadBalancer withCreated(String created) {
        this.created = created;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PutLoadBalancersId200ApplicationJsonLoadBalancer withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("included_traffic")
    public Long includedTraffic;
    public PutLoadBalancersId200ApplicationJsonLoadBalancer withIncludedTraffic(Long includedTraffic) {
        this.includedTraffic = includedTraffic;
        return this;
    }
    @JsonProperty("ingoing_traffic")
    public Long ingoingTraffic;
    public PutLoadBalancersId200ApplicationJsonLoadBalancer withIngoingTraffic(Long ingoingTraffic) {
        this.ingoingTraffic = ingoingTraffic;
        return this;
    }
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public PutLoadBalancersId200ApplicationJsonLoadBalancer withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonProperty("load_balancer_type")
    public PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerType loadBalancerType;
    public PutLoadBalancersId200ApplicationJsonLoadBalancer withLoadBalancerType(PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerType loadBalancerType) {
        this.loadBalancerType = loadBalancerType;
        return this;
    }
    @JsonProperty("location")
    public PutLoadBalancersId200ApplicationJsonLoadBalancerLocation location;
    public PutLoadBalancersId200ApplicationJsonLoadBalancer withLocation(PutLoadBalancersId200ApplicationJsonLoadBalancerLocation location) {
        this.location = location;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PutLoadBalancersId200ApplicationJsonLoadBalancer withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("outgoing_traffic")
    public Long outgoingTraffic;
    public PutLoadBalancersId200ApplicationJsonLoadBalancer withOutgoingTraffic(Long outgoingTraffic) {
        this.outgoingTraffic = outgoingTraffic;
        return this;
    }
    @JsonProperty("private_net")
    public PutLoadBalancersId200ApplicationJsonLoadBalancerPrivateNet[] privateNet;
    public PutLoadBalancersId200ApplicationJsonLoadBalancer withPrivateNet(PutLoadBalancersId200ApplicationJsonLoadBalancerPrivateNet[] privateNet) {
        this.privateNet = privateNet;
        return this;
    }
    @JsonProperty("protection")
    public PutLoadBalancersId200ApplicationJsonLoadBalancerProtection protection;
    public PutLoadBalancersId200ApplicationJsonLoadBalancer withProtection(PutLoadBalancersId200ApplicationJsonLoadBalancerProtection protection) {
        this.protection = protection;
        return this;
    }
    @JsonProperty("public_net")
    public PutLoadBalancersId200ApplicationJsonLoadBalancerPublicNet publicNet;
    public PutLoadBalancersId200ApplicationJsonLoadBalancer withPublicNet(PutLoadBalancersId200ApplicationJsonLoadBalancerPublicNet publicNet) {
        this.publicNet = publicNet;
        return this;
    }
    @JsonProperty("services")
    public PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerService[] services;
    public PutLoadBalancersId200ApplicationJsonLoadBalancer withServices(PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerService[] services) {
        this.services = services;
        return this;
    }
    @JsonProperty("targets")
    public PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTarget[] targets;
    public PutLoadBalancersId200ApplicationJsonLoadBalancer withTargets(PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTarget[] targets) {
        this.targets = targets;
        return this;
    }
}