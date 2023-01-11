package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostFirewallsCreateFirewallResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actions")
    public PostFirewallsCreateFirewallResponseAction[] actions;
    public PostFirewallsCreateFirewallResponse withActions(PostFirewallsCreateFirewallResponseAction[] actions) {
        this.actions = actions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firewall")
    public PostFirewallsCreateFirewallResponseFirewall firewall;
    public PostFirewallsCreateFirewallResponse withFirewall(PostFirewallsCreateFirewallResponseFirewall firewall) {
        this.firewall = firewall;
        return this;
    }
}