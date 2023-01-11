package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetLabelSelector
 * Label selector and a list of selected targets
**/
public class PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetLabelSelector {
    @JsonProperty("selector")
    public String selector;
    public PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetLabelSelector withSelector(String selector) {
        this.selector = selector;
        return this;
    }
}