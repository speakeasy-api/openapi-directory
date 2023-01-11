package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules {
    @JsonProperty("definitions")
    public UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions[] definitions;
    public UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules withDefinitions(UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions[] definitions) {
        this.definitions = definitions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dscpTagValue")
    public Long dscpTagValue;
    public UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules withDscpTagValue(Long dscpTagValue) {
        this.dscpTagValue = dscpTagValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pcpTagValue")
    public Long pcpTagValue;
    public UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules withPcpTagValue(Long pcpTagValue) {
        this.pcpTagValue = pcpTagValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("perClientBandwidthLimits")
    public UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits perClientBandwidthLimits;
    public UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules withPerClientBandwidthLimits(UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits perClientBandwidthLimits) {
        this.perClientBandwidthLimits = perClientBandwidthLimits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priority")
    public String priority;
    public UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules withPriority(String priority) {
        this.priority = priority;
        return this;
    }
}