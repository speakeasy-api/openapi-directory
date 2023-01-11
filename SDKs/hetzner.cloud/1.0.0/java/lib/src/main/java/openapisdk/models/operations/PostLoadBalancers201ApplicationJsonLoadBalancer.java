package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostLoadBalancers201ApplicationJsonLoadBalancer {
    @JsonProperty("algorithm")
    public PostLoadBalancers201ApplicationJsonLoadBalancerAlgorithm algorithm;
    public PostLoadBalancers201ApplicationJsonLoadBalancer withAlgorithm(PostLoadBalancers201ApplicationJsonLoadBalancerAlgorithm algorithm) {
        this.algorithm = algorithm;
        return this;
    }
    @JsonProperty("created")
    public String created;
    public PostLoadBalancers201ApplicationJsonLoadBalancer withCreated(String created) {
        this.created = created;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PostLoadBalancers201ApplicationJsonLoadBalancer withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("included_traffic")
    public Long includedTraffic;
    public PostLoadBalancers201ApplicationJsonLoadBalancer withIncludedTraffic(Long includedTraffic) {
        this.includedTraffic = includedTraffic;
        return this;
    }
    @JsonProperty("ingoing_traffic")
    public Long ingoingTraffic;
    public PostLoadBalancers201ApplicationJsonLoadBalancer withIngoingTraffic(Long ingoingTraffic) {
        this.ingoingTraffic = ingoingTraffic;
        return this;
    }
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public PostLoadBalancers201ApplicationJsonLoadBalancer withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonProperty("load_balancer_type")
    public PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerType loadBalancerType;
    public PostLoadBalancers201ApplicationJsonLoadBalancer withLoadBalancerType(PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerType loadBalancerType) {
        this.loadBalancerType = loadBalancerType;
        return this;
    }
    @JsonProperty("location")
    public PostLoadBalancers201ApplicationJsonLoadBalancerLocation location;
    public PostLoadBalancers201ApplicationJsonLoadBalancer withLocation(PostLoadBalancers201ApplicationJsonLoadBalancerLocation location) {
        this.location = location;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PostLoadBalancers201ApplicationJsonLoadBalancer withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("outgoing_traffic")
    public Long outgoingTraffic;
    public PostLoadBalancers201ApplicationJsonLoadBalancer withOutgoingTraffic(Long outgoingTraffic) {
        this.outgoingTraffic = outgoingTraffic;
        return this;
    }
    @JsonProperty("private_net")
    public PostLoadBalancers201ApplicationJsonLoadBalancerPrivateNet[] privateNet;
    public PostLoadBalancers201ApplicationJsonLoadBalancer withPrivateNet(PostLoadBalancers201ApplicationJsonLoadBalancerPrivateNet[] privateNet) {
        this.privateNet = privateNet;
        return this;
    }
    @JsonProperty("protection")
    public PostLoadBalancers201ApplicationJsonLoadBalancerProtection protection;
    public PostLoadBalancers201ApplicationJsonLoadBalancer withProtection(PostLoadBalancers201ApplicationJsonLoadBalancerProtection protection) {
        this.protection = protection;
        return this;
    }
    @JsonProperty("public_net")
    public PostLoadBalancers201ApplicationJsonLoadBalancerPublicNet publicNet;
    public PostLoadBalancers201ApplicationJsonLoadBalancer withPublicNet(PostLoadBalancers201ApplicationJsonLoadBalancerPublicNet publicNet) {
        this.publicNet = publicNet;
        return this;
    }
    @JsonProperty("services")
    public PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerService[] services;
    public PostLoadBalancers201ApplicationJsonLoadBalancer withServices(PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerService[] services) {
        this.services = services;
        return this;
    }
    @JsonProperty("targets")
    public PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTarget[] targets;
    public PostLoadBalancers201ApplicationJsonLoadBalancer withTargets(PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTarget[] targets) {
        this.targets = targets;
        return this;
    }
}