package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetFirewallsFirewallsResponseFirewallRule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GetFirewallsFirewallsResponseFirewallRule withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destination_ips")
    public String[] destinationIps;
    public GetFirewallsFirewallsResponseFirewallRule withDestinationIps(String[] destinationIps) {
        this.destinationIps = destinationIps;
        return this;
    }
    @JsonProperty("direction")
    public GetFirewallsFirewallsResponseFirewallRuleDirectionEnum direction;
    public GetFirewallsFirewallsResponseFirewallRule withDirection(GetFirewallsFirewallsResponseFirewallRuleDirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("port")
    public String port;
    public GetFirewallsFirewallsResponseFirewallRule withPort(String port) {
        this.port = port;
        return this;
    }
    @JsonProperty("protocol")
    public GetFirewallsFirewallsResponseFirewallRuleProtocolEnum protocol;
    public GetFirewallsFirewallsResponseFirewallRule withProtocol(GetFirewallsFirewallsResponseFirewallRuleProtocolEnum protocol) {
        this.protocol = protocol;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source_ips")
    public String[] sourceIps;
    public GetFirewallsFirewallsResponseFirewallRule withSourceIps(String[] sourceIps) {
        this.sourceIps = sourceIps;
        return this;
    }
}