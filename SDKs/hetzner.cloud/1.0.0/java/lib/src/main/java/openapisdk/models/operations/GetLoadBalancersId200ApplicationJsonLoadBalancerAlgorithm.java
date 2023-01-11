package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetLoadBalancersId200ApplicationJsonLoadBalancerAlgorithm
 * Algorithm of the Load Balancer
**/
public class GetLoadBalancersId200ApplicationJsonLoadBalancerAlgorithm {
    @JsonProperty("type")
    public GetLoadBalancersId200ApplicationJsonLoadBalancerAlgorithmTypeEnum type;
    public GetLoadBalancersId200ApplicationJsonLoadBalancerAlgorithm withType(GetLoadBalancersId200ApplicationJsonLoadBalancerAlgorithmTypeEnum type) {
        this.type = type;
        return this;
    }
}