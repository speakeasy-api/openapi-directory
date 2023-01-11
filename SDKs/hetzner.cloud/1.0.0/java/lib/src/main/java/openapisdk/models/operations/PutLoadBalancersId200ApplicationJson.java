package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutLoadBalancersId200ApplicationJson {
    @JsonProperty("load_balancer")
    public PutLoadBalancersId200ApplicationJsonLoadBalancer loadBalancer;
    public PutLoadBalancersId200ApplicationJson withLoadBalancer(PutLoadBalancersId200ApplicationJsonLoadBalancer loadBalancer) {
        this.loadBalancer = loadBalancer;
        return this;
    }
}