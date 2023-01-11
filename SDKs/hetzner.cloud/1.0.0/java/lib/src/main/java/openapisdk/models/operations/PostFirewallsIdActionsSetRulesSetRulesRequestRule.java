package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostFirewallsIdActionsSetRulesSetRulesRequestRule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public PostFirewallsIdActionsSetRulesSetRulesRequestRule withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destination_ips")
    public String[] destinationIps;
    public PostFirewallsIdActionsSetRulesSetRulesRequestRule withDestinationIps(String[] destinationIps) {
        this.destinationIps = destinationIps;
        return this;
    }
    @JsonProperty("direction")
    public PostFirewallsIdActionsSetRulesSetRulesRequestRuleDirectionEnum direction;
    public PostFirewallsIdActionsSetRulesSetRulesRequestRule withDirection(PostFirewallsIdActionsSetRulesSetRulesRequestRuleDirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("port")
    public String port;
    public PostFirewallsIdActionsSetRulesSetRulesRequestRule withPort(String port) {
        this.port = port;
        return this;
    }
    @JsonProperty("protocol")
    public PostFirewallsIdActionsSetRulesSetRulesRequestRuleProtocolEnum protocol;
    public PostFirewallsIdActionsSetRulesSetRulesRequestRule withProtocol(PostFirewallsIdActionsSetRulesSetRulesRequestRuleProtocolEnum protocol) {
        this.protocol = protocol;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source_ips")
    public String[] sourceIps;
    public PostFirewallsIdActionsSetRulesSetRulesRequestRule withSourceIps(String[] sourceIps) {
        this.sourceIps = sourceIps;
        return this;
    }
}