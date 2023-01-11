package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostLoadBalancersIdActionsAddTargetAddTargetRequestLabelSelector
 * Configuration for label selector targets, required if type is `label_selector`
**/
public class PostLoadBalancersIdActionsAddTargetAddTargetRequestLabelSelector {
    @JsonProperty("selector")
    public String selector;
    public PostLoadBalancersIdActionsAddTargetAddTargetRequestLabelSelector withSelector(String selector) {
        this.selector = selector;
        return this;
    }
}