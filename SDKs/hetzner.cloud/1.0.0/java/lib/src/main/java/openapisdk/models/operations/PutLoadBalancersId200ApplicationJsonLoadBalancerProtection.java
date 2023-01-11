package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PutLoadBalancersId200ApplicationJsonLoadBalancerProtection
 * Protection configuration for the Resource
**/
public class PutLoadBalancersId200ApplicationJsonLoadBalancerProtection {
    @JsonProperty("delete")
    public Boolean delete;
    public PutLoadBalancersId200ApplicationJsonLoadBalancerProtection withDelete(Boolean delete) {
        this.delete = delete;
        return this;
    }
}