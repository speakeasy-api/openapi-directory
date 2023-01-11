package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesLabelSelector
 * Configuration for type label_selector, required if type is `label_selector`
**/
public class PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesLabelSelector {
    @JsonProperty("selector")
    public String selector;
    public PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesLabelSelector withSelector(String selector) {
        this.selector = selector;
        return this;
    }
}