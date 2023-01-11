package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowedIps")
    public String[] allowedIps;
    public UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound withAllowedIps(String[] allowedIps) {
        this.allowedIps = allowedIps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinationPorts")
    public String[] destinationPorts;
    public UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound withDestinationPorts(String[] destinationPorts) {
        this.destinationPorts = destinationPorts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("protocol")
    public UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnum protocol;
    public UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound withProtocol(UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnum protocol) {
        this.protocol = protocol;
        return this;
    }
}