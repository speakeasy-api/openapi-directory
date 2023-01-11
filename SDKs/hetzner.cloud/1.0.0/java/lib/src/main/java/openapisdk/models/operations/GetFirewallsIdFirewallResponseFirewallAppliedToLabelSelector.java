package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetFirewallsIdFirewallResponseFirewallAppliedToLabelSelector {
    @JsonProperty("selector")
    public String selector;
    public GetFirewallsIdFirewallResponseFirewallAppliedToLabelSelector withSelector(String selector) {
        this.selector = selector;
        return this;
    }
}