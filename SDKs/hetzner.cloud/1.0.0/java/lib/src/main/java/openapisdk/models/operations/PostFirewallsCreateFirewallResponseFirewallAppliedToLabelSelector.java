package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostFirewallsCreateFirewallResponseFirewallAppliedToLabelSelector {
    @JsonProperty("selector")
    public String selector;
    public PostFirewallsCreateFirewallResponseFirewallAppliedToLabelSelector withSelector(String selector) {
        this.selector = selector;
        return this;
    }
}