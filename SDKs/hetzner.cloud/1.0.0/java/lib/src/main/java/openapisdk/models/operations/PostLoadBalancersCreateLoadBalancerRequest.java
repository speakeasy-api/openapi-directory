package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostLoadBalancersCreateLoadBalancerRequest {
    @JsonProperty("algorithm")
    public PostLoadBalancersCreateLoadBalancerRequestLoadBalancerAlgorithm algorithm;
    public PostLoadBalancersCreateLoadBalancerRequest withAlgorithm(PostLoadBalancersCreateLoadBalancerRequestLoadBalancerAlgorithm algorithm) {
        this.algorithm = algorithm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public PostLoadBalancersCreateLoadBalancerRequestLabels labels;
    public PostLoadBalancersCreateLoadBalancerRequest withLabels(PostLoadBalancersCreateLoadBalancerRequestLabels labels) {
        this.labels = labels;
        return this;
    }
    @JsonProperty("load_balancer_type")
    public String loadBalancerType;
    public PostLoadBalancersCreateLoadBalancerRequest withLoadBalancerType(String loadBalancerType) {
        this.loadBalancerType = loadBalancerType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public String location;
    public PostLoadBalancersCreateLoadBalancerRequest withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PostLoadBalancersCreateLoadBalancerRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("network")
    public Long network;
    public PostLoadBalancersCreateLoadBalancerRequest withNetwork(Long network) {
        this.network = network;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("network_zone")
    public String networkZone;
    public PostLoadBalancersCreateLoadBalancerRequest withNetworkZone(String networkZone) {
        this.networkZone = networkZone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("public_interface")
    public Boolean publicInterface;
    public PostLoadBalancersCreateLoadBalancerRequest withPublicInterface(Boolean publicInterface) {
        this.publicInterface = publicInterface;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("services")
    public PostLoadBalancersCreateLoadBalancerRequestLoadBalancerService[] services;
    public PostLoadBalancersCreateLoadBalancerRequest withServices(PostLoadBalancersCreateLoadBalancerRequestLoadBalancerService[] services) {
        this.services = services;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targets")
    public PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTarget[] targets;
    public PostLoadBalancersCreateLoadBalancerRequest withTargets(PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTarget[] targets) {
        this.targets = targets;
        return this;
    }
}