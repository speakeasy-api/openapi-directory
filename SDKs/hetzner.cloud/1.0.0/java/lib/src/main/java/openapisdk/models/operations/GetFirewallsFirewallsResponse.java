package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetFirewallsFirewallsResponse {
    @JsonProperty("firewalls")
    public GetFirewallsFirewallsResponseFirewall[] firewalls;
    public GetFirewallsFirewallsResponse withFirewalls(GetFirewallsFirewallsResponseFirewall[] firewalls) {
        this.firewalls = firewalls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public GetFirewallsFirewallsResponseMeta meta;
    public GetFirewallsFirewallsResponse withMeta(GetFirewallsFirewallsResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}