package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostFirewallsCreateFirewallRequestRule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public PostFirewallsCreateFirewallRequestRule withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destination_ips")
    public String[] destinationIps;
    public PostFirewallsCreateFirewallRequestRule withDestinationIps(String[] destinationIps) {
        this.destinationIps = destinationIps;
        return this;
    }
    @JsonProperty("direction")
    public PostFirewallsCreateFirewallRequestRuleDirectionEnum direction;
    public PostFirewallsCreateFirewallRequestRule withDirection(PostFirewallsCreateFirewallRequestRuleDirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("port")
    public String port;
    public PostFirewallsCreateFirewallRequestRule withPort(String port) {
        this.port = port;
        return this;
    }
    @JsonProperty("protocol")
    public PostFirewallsCreateFirewallRequestRuleProtocolEnum protocol;
    public PostFirewallsCreateFirewallRequestRule withProtocol(PostFirewallsCreateFirewallRequestRuleProtocolEnum protocol) {
        this.protocol = protocol;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source_ips")
    public String[] sourceIps;
    public PostFirewallsCreateFirewallRequestRule withSourceIps(String[] sourceIps) {
        this.sourceIps = sourceIps;
        return this;
    }
}