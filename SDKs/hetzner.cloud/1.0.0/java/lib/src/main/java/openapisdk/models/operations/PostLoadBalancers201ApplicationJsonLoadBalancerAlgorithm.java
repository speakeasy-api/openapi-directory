package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostLoadBalancers201ApplicationJsonLoadBalancerAlgorithm
 * Algorithm of the Load Balancer
**/
public class PostLoadBalancers201ApplicationJsonLoadBalancerAlgorithm {
    @JsonProperty("type")
    public PostLoadBalancers201ApplicationJsonLoadBalancerAlgorithmTypeEnum type;
    public PostLoadBalancers201ApplicationJsonLoadBalancerAlgorithm withType(PostLoadBalancers201ApplicationJsonLoadBalancerAlgorithmTypeEnum type) {
        this.type = type;
        return this;
    }
}