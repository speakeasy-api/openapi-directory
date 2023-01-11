package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkApplianceTrafficShapingRulesRequestBodyRules {
    @JsonProperty("definitions")
    public UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions[] definitions;
    public UpdateNetworkApplianceTrafficShapingRulesRequestBodyRules withDefinitions(UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions[] definitions) {
        this.definitions = definitions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dscpTagValue")
    public Long dscpTagValue;
    public UpdateNetworkApplianceTrafficShapingRulesRequestBodyRules withDscpTagValue(Long dscpTagValue) {
        this.dscpTagValue = dscpTagValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("perClientBandwidthLimits")
    public UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits perClientBandwidthLimits;
    public UpdateNetworkApplianceTrafficShapingRulesRequestBodyRules withPerClientBandwidthLimits(UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits perClientBandwidthLimits) {
        this.perClientBandwidthLimits = perClientBandwidthLimits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priority")
    public String priority;
    public UpdateNetworkApplianceTrafficShapingRulesRequestBodyRules withPriority(String priority) {
        this.priority = priority;
        return this;
    }
}