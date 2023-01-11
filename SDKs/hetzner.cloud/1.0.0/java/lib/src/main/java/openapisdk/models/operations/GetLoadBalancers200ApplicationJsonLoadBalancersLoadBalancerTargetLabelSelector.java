package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetLabelSelector
 * Label selector and a list of selected targets
**/
public class GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetLabelSelector {
    @JsonProperty("selector")
    public String selector;
    public GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetLabelSelector withSelector(String selector) {
        this.selector = selector;
        return this;
    }
}