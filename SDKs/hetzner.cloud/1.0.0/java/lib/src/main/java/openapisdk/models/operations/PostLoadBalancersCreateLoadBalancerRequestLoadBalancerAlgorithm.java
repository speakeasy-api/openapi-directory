package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostLoadBalancersCreateLoadBalancerRequestLoadBalancerAlgorithm
 * Algorithm of the Load Balancer
**/
public class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerAlgorithm {
    @JsonProperty("type")
    public PostLoadBalancersCreateLoadBalancerRequestLoadBalancerAlgorithmTypeEnum type;
    public PostLoadBalancersCreateLoadBalancerRequestLoadBalancerAlgorithm withType(PostLoadBalancersCreateLoadBalancerRequestLoadBalancerAlgorithmTypeEnum type) {
        this.type = type;
        return this;
    }
}