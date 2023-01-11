package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules {
    @JsonProperty("definitions")
    public CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions[] definitions;
    public CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules withDefinitions(CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions[] definitions) {
        this.definitions = definitions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dscpTagValue")
    public Long dscpTagValue;
    public CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules withDscpTagValue(Long dscpTagValue) {
        this.dscpTagValue = dscpTagValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pcpTagValue")
    public Long pcpTagValue;
    public CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules withPcpTagValue(Long pcpTagValue) {
        this.pcpTagValue = pcpTagValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("perClientBandwidthLimits")
    public CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits perClientBandwidthLimits;
    public CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules withPerClientBandwidthLimits(CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits perClientBandwidthLimits) {
        this.perClientBandwidthLimits = perClientBandwidthLimits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priority")
    public String priority;
    public CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules withPriority(String priority) {
        this.priority = priority;
        return this;
    }
}