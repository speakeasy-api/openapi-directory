package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetLabelSelector
 * Label selector and a list of selected targets
**/
public class PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetLabelSelector {
    @JsonProperty("selector")
    public String selector;
    public PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetLabelSelector withSelector(String selector) {
        this.selector = selector;
        return this;
    }
}