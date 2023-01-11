package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutFirewallsIdFirewallResponse {
    @JsonProperty("firewall")
    public PutFirewallsIdFirewallResponseFirewall firewall;
    public PutFirewallsIdFirewallResponse withFirewall(PutFirewallsIdFirewallResponseFirewall firewall) {
        this.firewall = firewall;
        return this;
    }
}