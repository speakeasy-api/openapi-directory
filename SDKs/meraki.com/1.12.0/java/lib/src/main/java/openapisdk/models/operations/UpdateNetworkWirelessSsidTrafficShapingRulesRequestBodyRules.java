package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules {
    @JsonProperty("definitions")
    public UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions[] definitions;
    public UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules withDefinitions(UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions[] definitions) {
        this.definitions = definitions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dscpTagValue")
    public Long dscpTagValue;
    public UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules withDscpTagValue(Long dscpTagValue) {
        this.dscpTagValue = dscpTagValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pcpTagValue")
    public Long pcpTagValue;
    public UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules withPcpTagValue(Long pcpTagValue) {
        this.pcpTagValue = pcpTagValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("perClientBandwidthLimits")
    public UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits perClientBandwidthLimits;
    public UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules withPerClientBandwidthLimits(UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits perClientBandwidthLimits) {
        this.perClientBandwidthLimits = perClientBandwidthLimits;
        return this;
    }
}