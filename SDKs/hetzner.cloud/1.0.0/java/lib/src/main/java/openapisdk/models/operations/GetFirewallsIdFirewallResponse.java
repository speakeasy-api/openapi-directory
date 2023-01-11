package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetFirewallsIdFirewallResponse {
    @JsonProperty("firewall")
    public GetFirewallsIdFirewallResponseFirewall firewall;
    public GetFirewallsIdFirewallResponse withFirewall(GetFirewallsIdFirewallResponseFirewall firewall) {
        this.firewall = firewall;
        return this;
    }
}