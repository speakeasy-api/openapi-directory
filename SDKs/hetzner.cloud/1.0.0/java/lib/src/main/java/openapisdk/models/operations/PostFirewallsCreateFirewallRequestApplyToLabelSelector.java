package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostFirewallsCreateFirewallRequestApplyToLabelSelector
 * Configuration for type LabelSelector, required if type is `label_selector`
**/
public class PostFirewallsCreateFirewallRequestApplyToLabelSelector {
    @JsonProperty("selector")
    public String selector;
    public PostFirewallsCreateFirewallRequestApplyToLabelSelector withSelector(String selector) {
        this.selector = selector;
        return this;
    }
}