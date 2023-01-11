package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits
 *     An object describing the bandwidth settings for your rule.
 * 
**/
public class UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bandwidthLimits")
    public UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits bandwidthLimits;
    public UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits withBandwidthLimits(UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits bandwidthLimits) {
        this.bandwidthLimits = bandwidthLimits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("settings")
    public String settings;
    public UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits withSettings(String settings) {
        this.settings = settings;
        return this;
    }
}