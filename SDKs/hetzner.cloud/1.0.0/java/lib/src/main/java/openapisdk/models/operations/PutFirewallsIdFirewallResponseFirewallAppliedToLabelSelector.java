package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutFirewallsIdFirewallResponseFirewallAppliedToLabelSelector {
    @JsonProperty("selector")
    public String selector;
    public PutFirewallsIdFirewallResponseFirewallAppliedToLabelSelector withSelector(String selector) {
        this.selector = selector;
        return this;
    }
}