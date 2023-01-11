package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetLoadBalancersId200ApplicationJson {
    @JsonProperty("load_balancer")
    public GetLoadBalancersId200ApplicationJsonLoadBalancer loadBalancer;
    public GetLoadBalancersId200ApplicationJson withLoadBalancer(GetLoadBalancersId200ApplicationJsonLoadBalancer loadBalancer) {
        this.loadBalancer = loadBalancer;
        return this;
    }
}