package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetFirewallsIdFirewallResponseFirewallRule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GetFirewallsIdFirewallResponseFirewallRule withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destination_ips")
    public String[] destinationIps;
    public GetFirewallsIdFirewallResponseFirewallRule withDestinationIps(String[] destinationIps) {
        this.destinationIps = destinationIps;
        return this;
    }
    @JsonProperty("direction")
    public GetFirewallsIdFirewallResponseFirewallRuleDirectionEnum direction;
    public GetFirewallsIdFirewallResponseFirewallRule withDirection(GetFirewallsIdFirewallResponseFirewallRuleDirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("port")
    public String port;
    public GetFirewallsIdFirewallResponseFirewallRule withPort(String port) {
        this.port = port;
        return this;
    }
    @JsonProperty("protocol")
    public GetFirewallsIdFirewallResponseFirewallRuleProtocolEnum protocol;
    public GetFirewallsIdFirewallResponseFirewallRule withProtocol(GetFirewallsIdFirewallResponseFirewallRuleProtocolEnum protocol) {
        this.protocol = protocol;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source_ips")
    public String[] sourceIps;
    public GetFirewallsIdFirewallResponseFirewallRule withSourceIps(String[] sourceIps) {
        this.sourceIps = sourceIps;
        return this;
    }
}