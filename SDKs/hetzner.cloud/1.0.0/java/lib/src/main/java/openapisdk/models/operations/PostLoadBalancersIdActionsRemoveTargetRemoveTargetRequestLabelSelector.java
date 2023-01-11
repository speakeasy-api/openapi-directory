package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestLabelSelector
 * Configuration for label selector targets, required if type is `label_selector`
**/
public class PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestLabelSelector {
    @JsonProperty("selector")
    public String selector;
    public PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestLabelSelector withSelector(String selector) {
        this.selector = selector;
        return this;
    }
}