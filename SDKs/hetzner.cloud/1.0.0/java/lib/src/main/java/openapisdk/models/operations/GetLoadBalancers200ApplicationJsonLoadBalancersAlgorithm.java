package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetLoadBalancers200ApplicationJsonLoadBalancersAlgorithm
 * Algorithm of the Load Balancer
**/
public class GetLoadBalancers200ApplicationJsonLoadBalancersAlgorithm {
    @JsonProperty("type")
    public GetLoadBalancers200ApplicationJsonLoadBalancersAlgorithmTypeEnum type;
    public GetLoadBalancers200ApplicationJsonLoadBalancersAlgorithm withType(GetLoadBalancers200ApplicationJsonLoadBalancersAlgorithmTypeEnum type) {
        this.type = type;
        return this;
    }
}