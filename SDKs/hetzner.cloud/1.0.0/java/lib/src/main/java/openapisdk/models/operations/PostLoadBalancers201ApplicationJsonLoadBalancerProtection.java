package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostLoadBalancers201ApplicationJsonLoadBalancerProtection
 * Protection configuration for the Resource
**/
public class PostLoadBalancers201ApplicationJsonLoadBalancerProtection {
    @JsonProperty("delete")
    public Boolean delete;
    public PostLoadBalancers201ApplicationJsonLoadBalancerProtection withDelete(Boolean delete) {
        this.delete = delete;
        return this;
    }
}