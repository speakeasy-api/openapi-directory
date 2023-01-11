package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan2
 * The bandwidth settings for the 'wan2' uplink
**/
public class UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan2 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("limitDown")
    public Long limitDown;
    public UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan2 withLimitDown(Long limitDown) {
        this.limitDown = limitDown;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("limitUp")
    public Long limitUp;
    public UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan2 withLimitUp(Long limitUp) {
        this.limitUp = limitUp;
        return this;
    }
}