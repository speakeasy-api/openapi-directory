package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutFirewallsIdFirewallResponseFirewallRule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public PutFirewallsIdFirewallResponseFirewallRule withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destination_ips")
    public String[] destinationIps;
    public PutFirewallsIdFirewallResponseFirewallRule withDestinationIps(String[] destinationIps) {
        this.destinationIps = destinationIps;
        return this;
    }
    @JsonProperty("direction")
    public PutFirewallsIdFirewallResponseFirewallRuleDirectionEnum direction;
    public PutFirewallsIdFirewallResponseFirewallRule withDirection(PutFirewallsIdFirewallResponseFirewallRuleDirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("port")
    public String port;
    public PutFirewallsIdFirewallResponseFirewallRule withPort(String port) {
        this.port = port;
        return this;
    }
    @JsonProperty("protocol")
    public PutFirewallsIdFirewallResponseFirewallRuleProtocolEnum protocol;
    public PutFirewallsIdFirewallResponseFirewallRule withProtocol(PutFirewallsIdFirewallResponseFirewallRuleProtocolEnum protocol) {
        this.protocol = protocol;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source_ips")
    public String[] sourceIps;
    public PutFirewallsIdFirewallResponseFirewallRule withSourceIps(String[] sourceIps) {
        this.sourceIps = sourceIps;
        return this;
    }
}