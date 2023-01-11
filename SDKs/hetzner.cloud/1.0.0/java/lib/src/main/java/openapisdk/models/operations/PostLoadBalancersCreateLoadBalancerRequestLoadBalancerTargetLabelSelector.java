package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLabelSelector
 * Label selector and a list of selected targets
**/
public class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLabelSelector {
    @JsonProperty("selector")
    public String selector;
    public PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLabelSelector withSelector(String selector) {
        this.selector = selector;
        return this;
    }
}