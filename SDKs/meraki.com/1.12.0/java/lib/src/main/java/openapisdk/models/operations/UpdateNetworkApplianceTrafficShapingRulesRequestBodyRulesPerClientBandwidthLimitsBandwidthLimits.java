package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits
 * The bandwidth limits object, specifying the upload ('limitUp') and download ('limitDown') speed in Kbps. These are only enforced if 'settings' is set to 'custom'.
**/
public class UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("limitDown")
    public Long limitDown;
    public UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits withLimitDown(Long limitDown) {
        this.limitDown = limitDown;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("limitUp")
    public Long limitUp;
    public UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits withLimitUp(Long limitUp) {
        this.limitUp = limitUp;
        return this;
    }
}