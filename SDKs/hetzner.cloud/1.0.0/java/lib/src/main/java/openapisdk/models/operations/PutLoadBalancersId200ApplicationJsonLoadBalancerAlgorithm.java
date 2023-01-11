package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PutLoadBalancersId200ApplicationJsonLoadBalancerAlgorithm
 * Algorithm of the Load Balancer
**/
public class PutLoadBalancersId200ApplicationJsonLoadBalancerAlgorithm {
    @JsonProperty("type")
    public PutLoadBalancersId200ApplicationJsonLoadBalancerAlgorithmTypeEnum type;
    public PutLoadBalancersId200ApplicationJsonLoadBalancerAlgorithm withType(PutLoadBalancersId200ApplicationJsonLoadBalancerAlgorithmTypeEnum type) {
        this.type = type;
        return this;
    }
}