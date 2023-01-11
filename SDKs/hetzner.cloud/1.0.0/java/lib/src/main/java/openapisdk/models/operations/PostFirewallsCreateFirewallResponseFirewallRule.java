package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostFirewallsCreateFirewallResponseFirewallRule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public PostFirewallsCreateFirewallResponseFirewallRule withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destination_ips")
    public String[] destinationIps;
    public PostFirewallsCreateFirewallResponseFirewallRule withDestinationIps(String[] destinationIps) {
        this.destinationIps = destinationIps;
        return this;
    }
    @JsonProperty("direction")
    public PostFirewallsCreateFirewallResponseFirewallRuleDirectionEnum direction;
    public PostFirewallsCreateFirewallResponseFirewallRule withDirection(PostFirewallsCreateFirewallResponseFirewallRuleDirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("port")
    public String port;
    public PostFirewallsCreateFirewallResponseFirewallRule withPort(String port) {
        this.port = port;
        return this;
    }
    @JsonProperty("protocol")
    public PostFirewallsCreateFirewallResponseFirewallRuleProtocolEnum protocol;
    public PostFirewallsCreateFirewallResponseFirewallRule withProtocol(PostFirewallsCreateFirewallResponseFirewallRuleProtocolEnum protocol) {
        this.protocol = protocol;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source_ips")
    public String[] sourceIps;
    public PostFirewallsCreateFirewallResponseFirewallRule withSourceIps(String[] sourceIps) {
        this.sourceIps = sourceIps;
        return this;
    }
}