package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetFirewallsFirewallsResponseFirewallAppliedToLabelSelector {
    @JsonProperty("selector")
    public String selector;
    public GetFirewallsFirewallsResponseFirewallAppliedToLabelSelector withSelector(String selector) {
        this.selector = selector;
        return this;
    }
}