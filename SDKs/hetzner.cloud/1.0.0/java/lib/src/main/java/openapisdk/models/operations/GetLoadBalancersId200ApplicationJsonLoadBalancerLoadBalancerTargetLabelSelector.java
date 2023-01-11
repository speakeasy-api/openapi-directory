package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetLabelSelector
 * Label selector and a list of selected targets
**/
public class GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetLabelSelector {
    @JsonProperty("selector")
    public String selector;
    public GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetLabelSelector withSelector(String selector) {
        this.selector = selector;
        return this;
    }
}