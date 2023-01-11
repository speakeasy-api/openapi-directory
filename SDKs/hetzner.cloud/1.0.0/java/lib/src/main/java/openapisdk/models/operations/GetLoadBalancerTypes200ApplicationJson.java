package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetLoadBalancerTypes200ApplicationJson {
    @JsonProperty("load_balancer_types")
    public GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypes[] loadBalancerTypes;
    public GetLoadBalancerTypes200ApplicationJson withLoadBalancerTypes(GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypes[] loadBalancerTypes) {
        this.loadBalancerTypes = loadBalancerTypes;
        return this;
    }
}